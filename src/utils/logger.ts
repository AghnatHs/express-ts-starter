import winston from "winston";

export const Logger: winston.Logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console({})],
});
