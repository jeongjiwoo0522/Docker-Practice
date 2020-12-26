import dotenv from "dotenv";

dotenv.config();

const db = {
  name: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: 3306,
  password: process.env.DATABASE_PASSWORD,
};

export { db }