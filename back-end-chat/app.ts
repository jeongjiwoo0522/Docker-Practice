import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "http";
import webSocket from './socket';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", (req, res, next) => {
  res.end()
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

const server: Server = app.listen(3000);
webSocket(server, app);