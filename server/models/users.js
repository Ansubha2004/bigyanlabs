import mongoose from "mongoose";
const useSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
})

const usermodel=mongoose.model("User",userSchema);
export default usermodel;