import transporter from "../../utils/transporter";
import { MailOptionsBody } from "./mail.schema";

export async function sendMail(mailOptions: MailOptionsBody) {
  const data = {
    to: "sheikhanas025@gmail.com",
    from: mailOptions.from,
    subject: mailOptions.subject,
    text: `From: ${mailOptions.from}\nName: ${mailOptions.name}\n\n${mailOptions.text}`,
  };

  await transporter.sendMail(data);
  return;
}
