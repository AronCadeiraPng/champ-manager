import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";
export declare class TeamFindService {
    private readonly teamRepository;
    constructor(teamRepository: Repository<Team>);
    allTeams(): Promise<Team[]>;
    ById(id: string): Promise<Team>;
}
