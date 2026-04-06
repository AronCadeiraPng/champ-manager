import { RegisterUserDto } from '../models/dtos/register-user.dto';
import { User } from '../models/entity/user.entity';
import { UserRegisterService } from '../use-cases/register-user/user-register.service';
import { UserFindService } from '../use-cases/find-user/find-user.service';
export declare class UserController {
    private readonly userFindService;
    private readonly userRegisterService;
    constructor(userFindService: UserFindService, userRegisterService: UserRegisterService);
    create(registerUserDto: RegisterUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
}
