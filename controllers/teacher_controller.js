const Teacher = require('../models/teacher');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

module.exports.register = async function(req,res){
    try {
        if (!req.body.email || !req.body.name ||!req.body.subject || !req.body.password || !req.body.confirmPassword){
            return res.status(404).json({
                message: "Enter valid text"
            });
        }else if(req.body.password != req.body.confirmPassword){
            return res.status(404).json({
                message: "Pasword and confirm Password doesn't match!"
            });
        }
        else {
            let teacher = await Teacher.findOne({email: req.body.email});
            if(!teacher){
                let salt = await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(req.body.password, salt);
                let newTeacher = await Teacher.create({
                    email: req.body.email,
                    name: req.body.name,
                    subject: req.body.subject,
                    password: hash
                });
                newTeacher.save();
                return res.status(200).json({
                    success: true,
                    message: "teacher Register Successfully!",
                });
            }
            else{
                return res.status(208).json({
                    success: false,
                    message: "User already exist",
                }); 
            }
        }

    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        })
    }
}

module.exports.login = async function(req,res){
    try {
        let teacher = await Teacher.findOne({email: req.body.email})
        if(!teacher || !bcrypt.compareSync(req.body.password,teacher.password)){
            return res.status(422).json({
                success:false,
                message: "Invalid Username/Password",
            });
        }else{
            return res.status(200).json({
                success: true,
                message: "Sign in successfully",
                user: {
                    token: jwt.sign(teacher.toJSON(), "clgportal", {
                        expiresIn: 100000000,
                      }),
                      id:  teacher._id,
                      name: teacher.name
                },
            });
        }
    }catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            err: err
        });
    }
}