import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterUserDto } from "../../../../_modules/users/models/dtos/register-user.dto";
import { User } from "../../../../_modules/users/models/entity/user.entity";

@Injectable()
export class SeedUserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async execute(userArrayDto: RegisterUserDto[]): Promise<User[]> {
        const createdUsers: User[] = [];

        for (const userDto of userArrayDto) {
            const userExists = await this.userRepository.findOne({
                where: { email: userDto.email, cpf: userDto.cpf },
            });

            if (userExists) {
                continue;
            }

            const user = await this.userRepository.save(userDto);
            createdUsers.push(user);
        }

        return createdUsers;
    }
}