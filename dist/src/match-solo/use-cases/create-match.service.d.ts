import { Repository } from 'typeorm';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { Match } from '../models/entity/match.entity';
export declare class MatchCreateService {
    private readonly matchRepository;
    constructor(matchRepository: Repository<Match>);
    create(createMatchSoloDto: CreateMatchDto): Promise<void>;
}
