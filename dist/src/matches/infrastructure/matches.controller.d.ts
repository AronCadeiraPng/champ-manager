import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
export declare class MatchesController {
    private readonly matchCreateService;
    constructor(matchCreateService: MatchCreateService);
    createMatch(phaseId: string, createMatchDto: CreateMatchDto): Promise<CreateMatchDto>;
}
