const teacher = require('../models/teacher');
const bcrypt = require('bcryptjs');

module.exports.register = async function(req,res){
    try {
        // console.log(req.body);
        if (!req.body.email || !req.body.name || !req.body.password || !req.body.confirmPassword){
            return res.status(404).json({
                message: "Enter valid text"
            });
        }else {
            let teacher = await teacher.findOne({email: req.body.email});
            if(!teacher){
                let salt = await bcrypt.genSalt(10);
                let hash = await bcrypt.hash(req.body.password, salt);
                let newteacher = await teacher.create({
                    email: req.body.email,
                    name: req.body.name,
                    password: hash
                });
                newteacher.save();
                console.log('newteacher',newteacher);
                return res.status(200).json({
                    success: true,
                    message: "teacher Register Successfully!",
                    id:  newteacher._id,
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
        // console.log(req.body);
        let teacher = await teacher.findOne({email: req.body.email})
        // console.log(teacher.email);
        if(!teacher || !bcrypt.compareSync(req.body.password,teacher.password)){
            return res.status(422).json({
                success:false,
                message: "Invalid Username/Password",
            });
        }else{
            return res.status(200).json({
                success: true,
                message: "Sign in successfully",
                id:  teacher._id
            });
        }
    }catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            err: err
        });
    }
}