import "reflect-metadata";

import fastify from "fastify";
import { getId } from "~/common/utils";
import { setupTypeorm } from "~/server/typeorm";

async function start() {
  try {
    await setupTypeorm();
  } catch (e) {
    console.log("setup typeorm error %o", e);
  }

  const app = fastify();

  app.get("/", async () => "hi");
  app.get("/parcel", async () => "Parcel");

  app.listen(7080, () => {
    console.log("listen success", getId());
  });
}

start();
