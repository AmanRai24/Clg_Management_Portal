const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
    {   assignment: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        deadline:{
            type:Date,
            required:true
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment; 