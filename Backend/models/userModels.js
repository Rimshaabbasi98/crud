 import mongoose from "mongoose";

 const user= new mongoose.Schema({

    name:{type:String},
    lastname:{type:String},
    email:{type:String},
    phone:{type:String}
 }, {timestamps:true});
  
 const userModel=mongoose.model("user",user);
 export default userModel;