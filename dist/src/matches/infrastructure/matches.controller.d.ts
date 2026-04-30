import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { Match } from '../models/entity/match.entity';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { MatchFindService } from '../use-cases/find-match/find-match.service';
export declare class MatchesController {
    private readonly matchCreateService;
    private readonly matchFindService;
    constructor(matchCreateService: MatchCreateService, matchFindService: MatchFindService);
    createMatch(phaseId: string, createMatchDto: CreateMatchDto): Promise<CreateMatchDto & Match>;
    findAllMatches(): Promise<Match[]>;
}
