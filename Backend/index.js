import express from "express";
import mongoose from "mongoose";
import router from "./Routes/userRoutes.js";
import cors from "cors"

const app=express();
const port=4545;

app.use(cors());

app.use(express.json())
app.use("/api",router);
app.get("/allusers",router)

mongoose.connect("mongodb://localhost:27017/crud",{}).then((res)=>console.log("MongoDB connected succesfully")).catch((err)=>{console.log("MongoDB not connected",err)});

app.listen(port,()=>{
    console.log(`Server is running on port on http://localhost:${port}`)
})