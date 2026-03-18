import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    registerUser(registerUserDto: RegisterUserDto): Promise<User>;
    loginIn(loginUser: LoginUserDto): Promise<User>;
    findAllUsers(): Promise<User[]>;
    findUserByName(name: string): Promise<User | null>;
    findUserById(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByCpf(cpf: string): Promise<User | null>;
}
