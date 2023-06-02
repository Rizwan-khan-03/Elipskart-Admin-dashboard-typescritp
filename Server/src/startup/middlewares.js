const express = require("express");
const cors = require("cors");
const logger = require("../utils/logger");

module.exports = async (app) => {
  try {
    app.use(express.json({ limit: "10mb" }));
    // app.use(express.urlencoded({ extended: false, limit: "10mb" }));
    // app.use(cors());
    // app.use(express.static("uploads"));
    app.use(express.static("static"));
    logger.info("Middlewares connected...");
  } catch (err) {
    logger.error(`Error in connecting middlewares ${err}`);
  }
};
