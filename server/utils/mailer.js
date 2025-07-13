import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const SendMail = async (name, email, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.HOST_EMAIL,
        pass: process.env.HOST_PASSKEY,
      },
    });

    const mail1 = {
      from: process.env.HOST_EMAIL,
      to: process.env.HOST_EMAIL,
      subject: `${subject} - ${name} - ${email}`,
      text: message,
    };

    const mail2 = {
      from: process.env.HOST_EMAIL,
      to: email,
      subject: `Thank You ${name} for contacting BigyanLabs`,
      text: `Dear ${name},\n\nThank you for reaching out to BigyanLabs.\nWe have received your query and our team will get back to you shortly.\n\nWarm regards,\nTeam BigyanLabs`,
    };

    const info1 = await transporter.sendMail(mail1);
    console.log("Message 1 sent");

    const info2 = await transporter.sendMail(mail2);
    console.log("Message 2 sent");
    
  } catch (error) {
    console.error("Error while sending emails:", error);
  }
};

export default SendMail;
