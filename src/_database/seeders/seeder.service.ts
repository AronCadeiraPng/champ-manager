import { Injectable } from '@nestjs/common';
import { SeedUserService } from './entities/users/user.seeder';
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