import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config({
  path: ".env",
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.KHUSHI_MAIL_ID,
    pass: process.env.KHUSHI_MAIL_PASSWORD,
  },
});

export default transporter;