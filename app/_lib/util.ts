import nodemailer from "nodemailer";

export const sendEmail = async (data: Record<string, any>) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
  });
  try{

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "codesignspa@gmail.com",
      subject: `From Portfolio: ${data.email}`,
      text: `From: ${data.email} \n ${data.message}`,
      html: `<p><b>From: ${data.email}</b></p></br><p>${data.message}</p>`,
    });
  }
  catch(error){
    console.log("Error in setting email"+error)
  }
  };
