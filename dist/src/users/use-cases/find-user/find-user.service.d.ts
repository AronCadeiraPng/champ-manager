import { User } from "src/users/models/entity/user.entity";
import { Repository } from "typeorm";
export declare class UserFindService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findAllUsers(): Promise<User[]>;
    findUserById(id: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByCpf(cpf: string): Promise<User | null>;
}
