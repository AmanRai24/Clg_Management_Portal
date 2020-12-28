const mongoose=require("mongoose");

//Schema
const teacherSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        name:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
);

const Teacher=mongoose.model("Teacher",teacherSchema);
module.exports=Teacher;
