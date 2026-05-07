import { MatchPairService } from 'src/matches/use-cases/pair-matches/pair-matches.service';
import { Phase } from 'src/phases/entity/phase.entity';
import { Repository } from 'typeorm';
import { PlayerFindService } from 'src/players/use-cases/find-player/find-player.service';
import { ParticipantFindService } from 'src/participant/use-cases/find-participants/find-participants.service';
import { MatchGetWinnersService } from 'src/matches/use-cases/get-winners/get-winners.service';
export declare class PhaseBuildOctaveService {
    private readonly phaseRepository;
    private readonly matchGetWinnersService;
    private readonly participantFindService;
    private readonly matchPairService;
    private readonly playerFindService;
    constructor(phaseRepository: Repository<Phase>, matchGetWinnersService: MatchGetWinnersService, participantFindService: ParticipantFindService, matchPairService: MatchPairService, playerFindService: PlayerFindService);
    execute(championshipId: string): Promise<void>;
}
