import SendMail from "../utils/mailer.js"

export const formdatasubmission=(req,res)=>{
    try{
        const {name,email,subject,message}=req.body;
        if(!name || !email || !subject || !message)
        {
            return res.json({success:false,message:"Empty credentials..."});
        }
        SendMail(name,email,subject,message);
        return res.json({success:true,message:"Form submitted successfully",data:{name,email,subject,message}})
    }
    catch(err){
        return res.json({sucess:false,message:"Error while from submission"});
    }

}