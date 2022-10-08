const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  SERVER_URL: process.env.SERVER_URL,
};
