import { UpdateTeamDto } from "src/teams/models/dtos/update-team.dto";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";
import { TeamFindService } from "../find-team/find-team.service";
export declare class TeamUpdateService {
    private readonly teamRepository;
    private readonly teamFindService;
    constructor(teamRepository: Repository<Team>, teamFindService: TeamFindService);
    updateTeam(teamId: string, updateTeamDto: UpdateTeamDto): Promise<import("typeorm").UpdateResult>;
}
