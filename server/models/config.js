import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URL,{dbName:"authusersdb"})
.then(()=>{
    console.log("Connected to Mongodb...");
})
.catch((err)=>{
    console.log("Error connecting to mongodb...")
})
