const app = require("express")();
require("./src/startup/index")(app);
module.exports = app;

const http = require("http");
const port =  "5000";
const logger = require("./src/utils/logger");
const cors = require("cors");

app.set("port", port);
app.use(cors());

const server = http.createServer(app);
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${bind}...`);
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case "EACCES":
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

