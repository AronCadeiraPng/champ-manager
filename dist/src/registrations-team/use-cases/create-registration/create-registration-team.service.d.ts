import { ChampionshipFindService } from 'src/championships/use-cases/find-championship/find-championship.service';
import { RegistrationTeam } from 'src/registrations-team/models/entity/registration-team.entity';
import { CreateTeamDto } from 'src/teams/models/dtos/create-team.dto';
import { TeamCreateService } from 'src/teams/use-cases/create-team/create-team.service';
import { TeamUpdateService } from 'src/teams/use-cases/update-team/update-team.service';
import { UserFindService } from 'src/users/use-cases/find-user/find-user.service';
import { Repository } from 'typeorm';
export declare class RegistrationsTeamCreateService {
    private readonly registrationTeamRepository;
    private readonly teamCreateService;
    private readonly championshipFindService;
    private readonly userFindService;
    private readonly teamUpdateService;
    constructor(registrationTeamRepository: Repository<RegistrationTeam>, teamCreateService: TeamCreateService, championshipFindService: ChampionshipFindService, userFindService: UserFindService, teamUpdateService: TeamUpdateService);
    execute(championshipId: string, createTeamDto: CreateTeamDto): Promise<RegistrationTeam>;
}
