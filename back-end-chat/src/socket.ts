import SocketIO, { Socket } from "socket.io";
import { Server } from "http";
import { Application } from "express";

const webSocket = (server: Server, app: Application) => {
  const io = SocketIO(server);
  app.set("io", io);

  io.on("connect", (socket: Socket) => {
    const aggent: string = socket.request.headers["user-agent"].slice(80, 100);
    app.set("aggent", aggent);
    console.log("connect", aggent);
  });
} 

export default webSocket;