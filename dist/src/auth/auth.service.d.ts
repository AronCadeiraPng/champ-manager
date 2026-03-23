import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly usersRepository;
    constructor(userService: UserService, jwtService: JwtService, usersRepository: Repository<User>);
    loginUser(email: string, password: string): Promise<{
        access_token: string;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto, requesterId: string): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
