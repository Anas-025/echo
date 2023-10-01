import { object, string, TypeOf } from "zod";

export const mailOptionsSchema = {
  body: object({
    name: string()
      .min(3, "name must be at least 3 characters long")
      .max(64, "name should not be longer than 64 characters"),
    from: string().min(1, "email is required").email("must be a valid email"),
    subject: string().min(10, "interest must be 10 characters long"),
    text: string().min(10, "message must be 10 characters long"),
  }).required(),
};

export type MailOptionsBody = TypeOf<typeof mailOptionsSchema.body>;
