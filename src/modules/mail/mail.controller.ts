import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sendMail } from "./mail.service";

type MailOptions = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

export async function handleSendMail(req: Request, res: Response) {
  const mailOptions : MailOptions = {
    from: "sheikhanas025@gmail.com",
    to: "shaikhanas0025@gmail.com",
    subject: "Hello",
    text: "Hello world?",
  };

  try {
    await sendMail(mailOptions);

    return res.status(StatusCodes.OK).send("Mail sent successfully");
  } catch (e: any) {
    console.log(e);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}
