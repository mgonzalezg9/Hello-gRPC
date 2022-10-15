const dotenv = require("dotenv");

dotenv.config();

export const SERVER_URL = process.env.SERVER_URL || "localhost:50051";
