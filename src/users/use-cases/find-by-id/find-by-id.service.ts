import { Inject, NotFoundException } from "@nestjs/common";
import { User } from "../../models/entity/user.entity";
import { UserRepository } from "../../repository/user.repository";

export class FindUserByIdService {
    constructor(
        @Inject(UserRepository)
        private readonly repository: UserRepository
    ) { }

    async execute(id: string): Promise<User> {
        const user = await this.repository.findById(id);
        
        if (!user) {
            throw new NotFoundException(`Usuário com id: ${id}`)
        }

        return user;
    }
}