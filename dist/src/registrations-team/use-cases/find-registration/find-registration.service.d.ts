import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { Repository } from 'typeorm';
export declare class RegistrationTeamFindService {
    private readonly registrationsRepository;
    constructor(registrationsRepository: Repository<RegistrationTeam>);
    allRegisters(): Promise<RegistrationTeam[]>;
    findRegistrationsByChampionship(championshipId: string): Promise<RegistrationTeam[]>;
    findRegisterById(id: string): Promise<RegistrationTeam>;
}
