import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();



const SendMail = async (name, email,subject, message) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.HOST_PASSKEY
        }
    })

    const mail1 = {
        from :process.env.HOST_EMAIL,
        to:process.env.HOST_EMAIL,
        subject: `${subject} - ${name} - ${email}`,
        text: message
    }

    const mail2 = {
        from: process.env.HOST_EMAIL,
        to: email,
        subject: `Thank You ${name} for contacting Bigyanlabs`,
        text: `Dear ${name},\n\nThank you for reaching out to BigyanLabs.\nWe have received your query & our team will get back to you shortly with the necessary information or support. If your query is urgent, please feel free to reach out to us directly at .\n\nWarm regards,\nTeam BigyanLabs`
    }

    await transporter.sendMail(mail1,(error,info)=>{
        if(error)
            console.log("Error in mail 1")
        else
        console.log("Message 2 mailed successfully...");
    })

    await transporter.sendMail(mail2,(error,info)=>{
        if(error)
            console.log("Error in mail 2")
        else
        console.log("Message 2 mailed successfully...");
    })


}

export default SendMail;