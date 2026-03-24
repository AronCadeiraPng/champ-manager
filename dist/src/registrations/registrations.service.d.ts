import { Registration } from './entities/registration.entity';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { ChampionshipsService } from 'src/championships/championships.service';
import { UserService } from 'src/users/user.service';
export declare class RegistrationsService {
    private readonly registrationsRepository;
    private readonly userService;
    private readonly championshipsService;
    constructor(registrationsRepository: Repository<Registration>, userService: UserService, championshipsService: ChampionshipsService);
    register(createRegistrationDto: CreateRegistrationDto, userId: string): Promise<Registration>;
    allRegisters(): Promise<Registration[]>;
    findRegisterById(id: string): Promise<Registration>;
    deleteRegistration(id: string): Promise<Registration>;
}
