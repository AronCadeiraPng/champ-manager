import { RegistrationsTeamCreateService } from '../use-cases/create-registration/create-registration-team.service';
import { RegistrationTeam } from '../models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
export declare class RegistrationsTeamController {
    private readonly registrationCreateService;
    constructor(registrationCreateService: RegistrationsTeamCreateService);
    createRegistration(championshipId: string, createTeamDto: CreateTeamDto): Promise<RegistrationTeam>;
}
