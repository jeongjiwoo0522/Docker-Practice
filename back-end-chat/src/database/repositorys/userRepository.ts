import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/user";

@EntityRepository(User) 
class UserRepository extends Repository<User> {
  public async findByAggent(aggent: string): Promise<User> {
    return await this.createQueryBuilder("user")
    .where("user.aggent = :aggent", { aggent })
    .getOne();
  }
}

export default UserRepository;