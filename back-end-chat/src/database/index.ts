import { ConnectionOptions } from "typeorm";
import { db } from "../../config";
import path from "path";

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/models/**/*.ts"],
  database: db.name,
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.password,
}

export default connectionOptions;