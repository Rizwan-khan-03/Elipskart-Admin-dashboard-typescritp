const mongoose = require("mongoose");
const logger = require("../utils/logger");
const dotenv = require('dotenv').config();
module.exports = async () => {
  const DB_CONNECTION_STRING =process.env.MONGO_URL;
  const url = DB_CONNECTION_STRING || "mongodb://localhost:27017";
  logger.info(`Connected url...${url}`);
  const dbName = "NEWECOM";
  try {
    await mongoose.connect(url, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      connectTimeoutMS: 30000,
    });
    logger.info(`Connected to Database...`);
  } catch (err) {
    logger.error(`failed to connect to ${url}: ${err}`);
  }
};
