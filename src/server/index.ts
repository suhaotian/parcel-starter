import fastify from "fastify";
import { getId } from "/src/common/utils";

const app = fastify();

app.get("/", async () => "hi");
app.get("/parcel", async () => "Parcel");

app.listen(7080, () => {
  console.log("listen success", getId());
});
