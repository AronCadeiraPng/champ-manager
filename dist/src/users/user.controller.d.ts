import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(registerUserDto: RegisterUserDto): Promise<User>;
    updateUser(updateUserDto: UpdateUserDto): Promise<void>;
    findUserById(id: string): Promise<User>;
    findAllUsers(): Promise<User[]>;
}
