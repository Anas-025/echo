import express from "express";
import { handleSendMail } from "./mail.controller";

const router = express.Router();

router.get("/khushi", handleSendMail);

export default router;
