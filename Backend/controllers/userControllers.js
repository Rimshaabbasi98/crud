import userModel from "../models/userModels.js";

export const newUser=async(req,res)=>{
    try{
        const {name,lastname,email,phone}=req.body;
        const user=userModel({name,lastname,email,phone});
        await user.save();
        if(!user){
            res.status(401).json({message:"User not created"});
        }
        res.status(200).json({message:"User created successfully",user});
    } catch(error){
        res.status(500).json({message:"Internal Server Error",error});
    }
}

export const getUser=async(req,res)=>{
    try {
        const user= await userModel.find();
        if(!user){
            res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User found successfully",user})
    
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error})
    }
}

export const updateUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const updateUser= await userModel.findByIdAndUpdate(userId,req.body,{
            new:true
        });
        if(!updateUser){
            res.status(404).json({message:"User not updated"})
        }
        res.status(200).json({message:"User updated successfully",updateUser})
    
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error})
    }
}

export const deleteUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const deleteUser= await userModel.findByIdAndDelete(userId)
        if(!deleteUser){
            res.status(404).json({message:"User not deleted"})
        }
        res.status(200).json({message:"User deleted successfully"})
    
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error})
    }
}