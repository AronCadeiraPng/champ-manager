import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';
export declare class RegistrationsTeamController {
    private readonly registrationCreateService;
    private readonly registrationFindService;
    constructor(registrationCreateService: RegistrationsTeamCreateService, registrationFindService: RegistrationTeamFindService);
    getAllRegistrationsTeam(): Promise<RegistrationTeam[]>;
    createRegistration(championshipId: string, createTeamDto: CreateTeamDto): Promise<RegistrationTeam>;
}
