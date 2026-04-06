import { RegisterUserDto } from "src/users/models/dtos/register-user.dto";
import { User } from "src/users/models/entity/user.entity";
import { Repository } from "typeorm";
import { UserFindService } from "../find-user/find-user.service";
export declare class UserRegisterService {
    private readonly usersRepository;
    private readonly findUser;
    constructor(usersRepository: Repository<User>, findUser: UserFindService);
    registerUser(registerUserDto: RegisterUserDto): Promise<User>;
}
