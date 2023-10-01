import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { MailOptionsBody, mailOptionsSchema } from "./mail.schema";
import { sendMail } from "./mail.service";

export async function handleSendMail(
  req: Request<{}, {}, MailOptionsBody>,
  res: Response
) {
  const mailOptions = req.body;

  try {
    mailOptionsSchema.body.parse(mailOptions);
    await sendMail(mailOptions);

    return res.status(StatusCodes.OK).send("Mail sent successfully");
  } catch (e: any) {
    console.log("error: ", e.message);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}
