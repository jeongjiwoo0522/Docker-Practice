import { EntityRepository, Repository } from "typeorm";
import { Chat } from "../models/chat";

@EntityRepository()
class ChatRepository extends Repository<Chat> {
  public async createChat(chat: string, aggent: string): Promise<Chat> {
    const newChat = new Chat();
    newChat.chat = chat;
    newChat.aggent = aggent;
    return await this.manager.save(newChat);
  }

  public async findAll(): Promise<Chat[]> {
    return await this.createQueryBuilder("chat")
    .getMany();
  }
}

export default ChatRepository;