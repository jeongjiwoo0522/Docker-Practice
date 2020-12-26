import { getCustomRepository } from "typeorm";
import { BusinessLogic } from ".";
import { Chat } from "../database/models/chat";
import ChatRepository from "../database/repository/chatRepository";
import { Server } from "socket.io";

const showInfo: BusinessLogic = (req, res, next) => {
  res.json({
    aggent: req.app.get("aggent"),
  });
}

const showChatList: BusinessLogic = async (req, res, next) => {
  const chatRepo: ChatRepository = getCustomRepository(ChatRepository);
  const chats = await chatRepo.findAll();
  res.status(200).json(chats);
}

const makeChat: BusinessLogic = async (req, res, next) => {
  const chatRepo: ChatRepository = getCustomRepository(ChatRepository);
  const { chat, aggent } = req.body;
  const io: Server = req.app.get("io");
  const newChat: Chat = await chatRepo.createChat(chat, aggent);
  res.json(newChat);
  io.emit("chat", newChat);
}

const deleteChat: BusinessLogic = async (req, res, next) => {
  const chatRepo: ChatRepository = getCustomRepository(ChatRepository);
  chatRepo.deleteAll();
  res.send("ok");
}

export {
  showInfo,
  showChatList,
  makeChat,
  deleteChat
}