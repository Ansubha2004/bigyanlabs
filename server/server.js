import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import formroute from "./routes/formroute.js";
import cookieParser from "cookie-parser";
import Authrouter from "./routes/Authrouter.js"
import Datarouter from './routes/Datarouter.js'



dotenv.config();
const app=express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin:[],
      methods: ['POST'], // adjust as needed
    credentials: true,
  })
);

app.get("/",(req,res)=>{
    return res.json({success:true,messgae:"Official backend api of Bigyan labs running......."})
})

app.use('/',formroute);
app.use("/",Authrouter)
app.use('/',Datarouter);

app.all('*',(req,res)=>{
    return res.json({success:false,message:"Error in routes"});
})

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});