import { CreateMatchDto } from "src/matches/models/dtos/create-match.dto";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";
export declare class MatchCreateService {
    private readonly matchRepository;
    constructor(matchRepository: Repository<Match>);
    execute(createMatchDto: CreateMatchDto): Promise<CreateMatchDto & Match>;
}
