import { Inject } from "@nestjs/common";
import { User } from "../../models/entity/user.entity";
import { UserRepository } from "../../repository/user.repository";

export class FindAllUserService {
  constructor(
    @Inject(UserRepository)
    private readonly repository: UserRepository
) { }

  async execute(): Promise<User[]> {
    return await this.repository.findAll();
  }
}