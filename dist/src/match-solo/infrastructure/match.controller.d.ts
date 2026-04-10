import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { MatchCreateService } from '../use-cases/create-match.service';
export declare class MatchController {
    private readonly matchCreateService;
    constructor(matchCreateService: MatchCreateService);
    create(createMatchDto: CreateMatchDto): Promise<void>;
}
