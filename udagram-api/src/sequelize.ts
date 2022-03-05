import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   port: config.db_port,

//   dialect: "postgres",
//   storage: ":memory:",
// });
const db_port=config.db_port;
const db_password=config.password;
const db_user=config.username;
const db_name=config.database;
const db_host=config.host;

export const sequelize = new Sequelize(`postgres://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}`)
