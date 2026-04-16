import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { RegistrationTeamFindService } from '../use-cases/find-registration/find-registration.service';
import { RegistrationTeamDeleteService } from '../use-cases/delete-registration/delete-registration.service';
export declare class RegistrationsTeamController {
    private readonly registrationCreateService;
    private readonly registrationFindService;
    private readonly registrationDeleteService;
    constructor(registrationCreateService: RegistrationsTeamCreateService, registrationFindService: RegistrationTeamFindService, registrationDeleteService: RegistrationTeamDeleteService);
    getAllRegistrationsTeam(): Promise<RegistrationTeam[]>;
    deleteRegistration(id: string): Promise<RegistrationTeam>;
    createRegistration(championshipId: string, createTeamDto: CreateTeamDto): Promise<RegistrationTeam>;
}
