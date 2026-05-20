import { Injectable, Logger } from "@nestjs/common";
import { SeedUserService } from "./entities/users/user.seeder";
import { RegisterUserDto } from "../../users/models/dtos/register-user.dto";
import { SeedRegistrationService } from "./entities/registrations/registration.seeder";
import { User } from "../../users/models/entity/user.entity";

@Injectable()
export class Seeder {
    private readonly logger = new Logger("Seeder");

    constructor(
        private readonly seedUserService: SeedUserService,
        private readonly seedRegistrationService: SeedRegistrationService,
    ) { }

    async seed(usersArray: RegisterUserDto[], championshipId: string): Promise<void> {
        try {
            const users = await this.users(usersArray);

            await this.registrations(users, championshipId);

            this.logger.debug(
                "Seeding de usuários e suas inscrições concluído com sucesso...",
            );
        } catch (error) {
            this.logger.error(
                "Falha no seeding...",
                error,
            );
            throw error;
        }
    }

    async users(usersArrayDto: RegisterUserDto[]): Promise<User[]> {
        const createdUsers = await this.seedUserService.execute(usersArrayDto);

        this.logger.debug(`Usuários criados: ${createdUsers.length}`);

        return createdUsers;
    }

    async registrations(usersArray: User[], championshipId: string) {
        const createdRegistrations = await this.seedRegistrationService.execute(usersArray, championshipId);

        this.logger.debug(`Inscrições criadas: ${createdRegistrations.length}`);

        return createdRegistrations.length;
    }
}