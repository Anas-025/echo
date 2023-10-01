import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mailRouter from "./modules/mail/mail.route";
import logger from "./utils/logger";

dotenv.config({
  path: ".env",
});
const PORT = process.env.PORT || 4000;
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

app.use("/mail", mailRouter);

const server = app.listen(PORT, async () => {
  // await connectToDatabase();
  logger.info(`Server listening at http://localhost:${PORT}`);
});

const signals = ["SIGTERM", "SIGINT"];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    logger.info("Goodbye, got signal", signal);
    server.close();

    // disconnect from the db
    // await disconnectFromDatabase();

    logger.info("My work here is done");

    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}

export default app;
