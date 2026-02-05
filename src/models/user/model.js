import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    password:{
        type:String,
        required:true
    }, 
    
},
{timestamps:true}
);


export default mongoose.model("User", userSchema);