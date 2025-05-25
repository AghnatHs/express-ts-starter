import { PrismaClient } from "@prisma/client";
import { Logger } from "../utils/logger";

export const DBPrismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

DBPrismaClient.$on("error", (e: any) => {
  Logger.error(`[PRISMA ERROR] ${e.message}`);
});

DBPrismaClient.$on("warn", (e: any) => {
  Logger.error(`[PRISMA WARN] ${e.message}`);
});

DBPrismaClient.$on("info", (e: any) => {
  Logger.info(`[PRISMA WARN] ${e.message}`);
});

DBPrismaClient.$on("query", (e: any) => {
  Logger.info("Query: " + e.query);
  Logger.info("Params: " + e.params);
  Logger.info("Duration: " + e.duration + "ms");
});
