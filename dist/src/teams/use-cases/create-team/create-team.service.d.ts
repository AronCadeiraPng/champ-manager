import { CreateTeamDto } from '../../models/dtos/create-team.dto';
import { Team } from 'src/teams/models/entity/team.entity';
import { Repository } from 'typeorm';
import { MemberCreateService } from 'src/members/use-cases/create-member/create-member.service';
export declare class TeamCreateService {
    private readonly teamRepository;
    private readonly memberCreateService;
    constructor(teamRepository: Repository<Team>, memberCreateService: MemberCreateService);
    execute(createTeamDto: CreateTeamDto): Promise<Team>;
}
