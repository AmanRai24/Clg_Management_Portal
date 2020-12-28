const Assignment = require('../models/assignment');
const Teacher = require('../models/teacher');

module.exports.create = async function(req,res){
    try {
        if (!req.body.assignment || !req.body.title || !req.body.deadline || !req.body.description){
            return res.status(404).json({
                success: false,
                message: "Enter valid fields"
            });
        }else{
            let newAssignment = await Assignment.create(req.body);


            let owner = await Teacher.findById(req.user.id);
            owner.properties.push(newAssignment._id);
            owner.save();

            return res.status(200).json({
                success: true,
                message: "Assignment Successfully added!",
            });
        }  
    }catch(err){
        return res.status(500).json({
            message: "Server Error",
        })
    }
} 