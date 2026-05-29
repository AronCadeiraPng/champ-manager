import { Injectable } from '@nestjs/common';
import { SeedUserService } from './entities/users/user.seeder';
import { SeedRegistrationService } from './entities/registrations/registration.seeder';
import { RegisterUserDto } from '../../_modules/users/models/dtos/register-user.dto';

@Injectable()
export class SeederService {
constructor(
    private readonly seedUserService: SeedUserService,
    private readonly seedRegistrationService: SeedRegistrationService
) {}

    async execute(usersArrayDto: RegisterUserDto[], championshipId: string) {
        const users = await this.seedUserService.execute(usersArrayDto);

        const registrations = await this.seedRegistrationService.execute(users, championshipId);

        return users;
    }
}