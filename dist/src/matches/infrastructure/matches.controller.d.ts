import { MatchCreateService } from '../use-cases/create-match/create-match.service';
import { Match } from '../models/entity/match.entity';
import { CreateMatchDto } from '../models/dtos/create-match.dto';
import { MatchFindService } from '../use-cases/find-match/find-match.service';
import { ChampionshipStatusEnum } from 'src/common/enums/championship-status.enum';
import { MatchSetWinnerService } from '../use-cases/set-winner/set-winner.service';
import { MatchGetWinnersService } from '../use-cases/get-winners/get-winners.service';
import { PhaseEnum } from 'src/common/enums/phase-name.enum';
export declare class MatchesController {
    private readonly matchCreateService;
    private readonly matchFindService;
    private readonly matchSetWinnerService;
    private readonly matchGetWinnersService;
    constructor(matchCreateService: MatchCreateService, matchFindService: MatchFindService, matchSetWinnerService: MatchSetWinnerService, matchGetWinnersService: MatchGetWinnersService);
    findAllMatches(): Promise<Match[]>;
    findAllWinersFromPhase(championshipId: string, phase: ChampionshipStatusEnum): Promise<import("../../players/models/entity/player.entity").Player[]>;
    setWinner(playerId: string): Promise<import("../../players/models/entity/player.entity").Player>;
    findMatchByParticipant(participantId: string): Promise<Match[]>;
    createMatch(phaseId: string, createMatchDto: CreateMatchDto): Promise<CreateMatchDto & Match>;
    findByChampionshipStatus(championshipId: string, status: PhaseEnum): Promise<Match[]>;
}
