import fastify from "fastify";
import { getId } from "~/common/utils";
const app = fastify();

app.get("/", async () => "hi");
app.listen(7080, () => {
  console.log("运行成功", getId());
});
