import express from "express";
import { handleSendMail } from "./mail.controller";

const router = express.Router();

router.post("/khushi", handleSendMail);

export default router;
