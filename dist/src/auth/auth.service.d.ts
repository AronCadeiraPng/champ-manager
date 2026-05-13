import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/users/models/dtos/update-user.dto';
import { User } from 'src/users/models/entity/user.entity';
import { Repository } from 'typeorm';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
export declare class AuthService {
    private userFindService;
    private jwtService;
    private readonly usersRepository;
    constructor(userFindService: UserFindService, jwtService: JwtService, usersRepository: Repository<User>);
    loginUser(email: string, password: string): Promise<string>;
    updateUser(id: string, updateUserDto: UpdateUserDto, requesterId: string): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
