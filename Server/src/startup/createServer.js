const http = require("http");
const app = require("../../app");
const port =  "6000";
const logger = require("../utils/logger");

app.set("port", port);

const server = http.createServer(app);
logger.info(`server on ${server}...`);
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

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(`port ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

