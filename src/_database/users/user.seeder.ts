import { Injectable } from '@nestjs/common';
import { User } from '../../users/models/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../../users/models/dtos/register-user.dto';

@Injectable()
export class SeedUserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async execute(
        userArrayDto: RegisterUserDto[],
    ): Promise<User[]> {
        return Promise.all(
            userArrayDto.map(async (userDto) => {
                return await this.userRepository.save(userDto);
            }),
        );
    }
}