import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { TeamCreateService } from 'src/teams/use-cases/create-team/create-team.service';
import { Repository } from 'typeorm';
export declare class RegistrationsTeamCreateService {
    private readonly registrationTeamRepository;
    private readonly teamCreateService;
    private readonly championshipFindService;
    constructor(registrationTeamRepository: Repository<RegistrationTeam>, teamCreateService: TeamCreateService, championshipFindService: ChampionshipFindService);
    create(championshipId: string, createTeamDto: CreateTeamDto): Promise<RegistrationTeam>;
}
