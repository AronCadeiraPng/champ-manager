import { RegistrationSolo } from 'src/registrations-solo/models/entity/registration.entity';
import { Repository } from 'typeorm';
export declare class RegistrationSoloFindService {
    private readonly registrationsRepository;
    constructor(registrationsRepository: Repository<RegistrationSolo>);
    allRegisters(): Promise<RegistrationSolo[]>;
    findRegistrationsByChampionship(championshipId: string): Promise<RegistrationSolo[]>;
    findRegisterById(id: string): Promise<RegistrationSolo>;
}
