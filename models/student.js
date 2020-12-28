const mongoose = require('mongoose');

//schema
const studentSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        assignment: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Assignment',
            }
        ],
    },{
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student; 