const mongoose=require("mongoose");
const {model} =require('../config/mongoose');

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
        password:{
            type:String,
            required:true
        }
    },{
        timestamps:true
    }
);

const teacher=mongoose.model("teacher",teacherSchema);
module.exports=teacher;