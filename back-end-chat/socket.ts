import SocketIO, { Socket } from "socket.io";
import { Server } from "http";
import { Application } from "express";

const webSocket = (server: Server, app: Application) => {
  const io = SocketIO(server);
  app.set("io", io);

  io.on("connect", (socket: Socket) => {
    console.log("connect", socket.request.headers["user-agent"].slice(80, 100));
  });
} 

export default webSocket;