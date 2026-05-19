import { Injectable, Logger } from "@nestjs/common";
import { SeedUserService } from "./entities/users/user.seeder";
import { RegisterUserDto } from "../../users/models/dtos/register-user.dto";

@Injectable()
export class Seeder {
    private readonly logger = new Logger("Seeder");

    constructor(
        private readonly seedUserService: SeedUserService,
    ) {}

    async seed(usersArray: RegisterUserDto[]): Promise<void> {
        try {
            await this.users(usersArray);

            this.logger.debug(
                "Seeding de usuários concluído com sucesso...",
            );
        } catch (error) {
            this.logger.error(
                "Falha no seeding de usuários...",
                error,
            );
            throw error;
        }
    }

    async users(usersArrayDto: RegisterUserDto[]): Promise<number> {
    const createdUsers = await this.seedUserService.execute(usersArrayDto);

    this.logger.debug(`Usuários criados: ${createdUsers.length}`);

    return createdUsers.length;
}
}