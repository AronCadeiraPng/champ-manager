import { Injectable } from '@nestjs/common';
import { SeedUserService } from '../users/user.seeder';
import { RegisterUserDto } from '../../users/models/dtos/register-user.dto';

@Injectable()
export class SeederService {
constructor(
    private readonly seedUserService: SeedUserService
) {}

    async execute(usersArrayDto: RegisterUserDto[]) {
        const users = await this.seedUserService.execute(usersArrayDto);

        return users;
    }
}