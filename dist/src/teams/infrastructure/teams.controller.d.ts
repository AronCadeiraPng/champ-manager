import { CreateTeamDto } from '../models/dtos/create-team.dto';
import { TeamCreateService } from '../use-cases/create-team/create-team.service';
import { Team } from '../models/entity/team.entity';
import { TeamFindService } from '../use-cases/find-team/find-team.service';
import { TeamDeleteService } from '../use-cases/delete-team/delete-team.service';
export declare class TeamsController {
    private readonly teamCreateService;
    private readonly teamFindService;
    private readonly teamDeleteService;
    constructor(teamCreateService: TeamCreateService, teamFindService: TeamFindService, teamDeleteService: TeamDeleteService);
    create(createTeamDto: CreateTeamDto): void;
    getAllTeams(): Promise<Team[]>;
    deleteAllTeams(): Promise<void>;
}
