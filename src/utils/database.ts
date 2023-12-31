import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "./logger";
dotenv.config({
  path: ".env",
});

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING as string;

export async function connectToDatabase() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connect to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database. Goodbye");
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();

  logger.info("Disconnect from database");

  return;
}
