import { MemberDeleteService } from "src/members/use-cases/delete-member/delete-member.service";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";
import { TeamFindService } from "../find-team/find-team.service";
export declare class TeamDeleteService {
    private readonly teamRepository;
    private readonly teamFindService;
    private readonly memberDeleteService;
    constructor(teamRepository: Repository<Team>, teamFindService: TeamFindService, memberDeleteService: MemberDeleteService);
    deleteTeamById(teamId: string): Promise<Team>;
    deleteAllTeams(): Promise<void>;
}
