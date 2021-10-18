import fastify from "fastify";
import { Server } from "socket.io";
import { getId } from "/src/common/utils";

const app = fastify();

const io = new Server(app.server, { path: "/io" });

app.get("/", async () => "hi");
app.get("/api/parcel", async () => "Parcel");

app.listen(7080, () => {
  console.log("listen success", getId());
});
