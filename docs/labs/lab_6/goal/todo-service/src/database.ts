import { DataSource } from "typeorm";
import { Task } from "./entities/task";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Auto creates tables, disable in production
  logging: false,
  entities: [Task],
});
