import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "khushi.research@gmail.com",
    pass: "yyel faco icyc lpgp",
  },
});

export default transporter;