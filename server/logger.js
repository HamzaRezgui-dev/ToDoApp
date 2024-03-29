const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;

//docker file front back / ignore nodemodules
//docker file ignore node modules
