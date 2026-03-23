import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(registerUserDto: RegisterUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
}
