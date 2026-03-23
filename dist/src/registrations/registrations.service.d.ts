import { Registration } from './entities/registration.entity';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationsService {
    private readonly registrationsRepository;
    constructor(registrationsRepository: Repository<Registration>);
    register(createRegistrationDto: CreateRegistrationDto, userId: string): Promise<Registration>;
    allRegisters(): Promise<Registration[]>;
    findRegisterById(id: string): Promise<Registration | null>;
}
