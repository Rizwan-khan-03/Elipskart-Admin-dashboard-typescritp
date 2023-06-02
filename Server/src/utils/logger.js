const pino = require("pino");
const pretty = require("pino-pretty");
const stream = pretty({
	colorize: true,
	ignore: "pid,hostname",
	levelFirst: true,
});
const logger = pino(stream);
module.exports = logger;
