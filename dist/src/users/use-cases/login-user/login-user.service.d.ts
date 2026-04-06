import { Repository } from 'typeorm';
import { User } from 'src/users/models/entity/user.entity';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
export declare class UserLoginService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    loginIn(loginUser: LoginUserDto): Promise<User>;
}
