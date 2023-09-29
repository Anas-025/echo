import transporter from "../../utils/transporter";

export async function sendMail(mailInfo: any) {
  await transporter.sendMail(mailInfo);
}
