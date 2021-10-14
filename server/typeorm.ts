import { createConnection, Connection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "~/server/entity/User";

const typeOrmConfig: PostgresConnectionOptions = {
  dropSchema: false,
  synchronize: true,
  logging: true,
  type: "postgres",
  host: "",
  port: 4056,
  username: "",
  password: "",
  database: "",
  entities: [User],
};

export async function setupTypeorm(): Promise<Connection> {
  const connection = await createConnection(typeOrmConfig);
  return connection;
}
