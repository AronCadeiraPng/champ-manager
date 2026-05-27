import { Inject, NotFoundException } from "@nestjs/common";
import { User } from "../../models/entity/user.entity";
import { UserRepository } from "../../repository/user.repository";

export class FindUserByCpfService {
    constructor(
        @Inject(UserRepository)
        private readonly repository: UserRepository
    ) { }

    async execute(cpf: string): Promise<User> {
        return await this.repository.findByCpf(cpf);
    }
}