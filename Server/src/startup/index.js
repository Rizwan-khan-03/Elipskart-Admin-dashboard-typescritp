const startDB = require("./startDB");
const middlewares = require("./middlewares");
const routes = require("./routes");
const logger = require("../utils/logger");

module.exports = async (app) => {
  try {
    startDB();
    await middlewares(app);
    routes(app);
    // makeUploadDirectory();
  } catch (err) {
    logger.error(err);
  }
};
