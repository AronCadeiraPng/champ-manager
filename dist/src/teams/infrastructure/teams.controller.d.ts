import { CreateTeamDto } from '../models/dtos/create-team.dto';
import { TeamCreateService } from '../use-cases/create-team/create-team.service';
export declare class TeamsController {
    private readonly teamCreateService;
    constructor(teamCreateService: TeamCreateService);
    create(createTeamDto: CreateTeamDto): void;
}
