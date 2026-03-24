import { CreateTeamDto } from './dto/create-team.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { UserService } from 'src/users/user.service';
export declare class TeamsService {
    private readonly teamsRepository;
    private readonly usersRepository;
    private readonly usersService;
    constructor(teamsRepository: Repository<Team>, usersRepository: Repository<User>, usersService: UserService);
    createTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    addPlayer(team: CreateTeamDto, userId: string): Promise<void>;
}
