import { MemberDeleteService } from "src/members/use-cases/delete-member/delete-member.service";
import { Team } from "src/teams/models/entity/team.entity";
import { Repository } from "typeorm";
export declare class TeamDeleteService {
    private readonly teamRepository;
    private readonly memberDeleteService;
    constructor(teamRepository: Repository<Team>, memberDeleteService: MemberDeleteService);
    deleteAllTeams(): Promise<void>;
}
