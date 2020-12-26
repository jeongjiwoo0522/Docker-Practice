import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  chat: string;

  @Column()
  aggent: string;
}

export { Chat }