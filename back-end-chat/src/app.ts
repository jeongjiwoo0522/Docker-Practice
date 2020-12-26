import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "http";
import { createConnection } from "typeorm";
import webSocket from "./socket";
import apitRouter from "./routes";
import connectionOptions from "./database";

const app: express.Application = express();

createConnection(connectionOptions)
.then(async (connection) => {
  await connection.query("CREATE DATABASE IF NOT EXISTS `docker`")
  console.log("DB connection success");
})
.catch(console.error);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/socket", apitRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

const server: Server = app.listen(3000);
webSocket(server, app);