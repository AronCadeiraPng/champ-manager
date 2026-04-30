import { MatchShuffleService } from "../shuffle-match/shuffle-match.service";
import { MatchCreateService } from "../create-match/create-match.service";
import { MatchUpdateService } from "../update-match/update-match.service";
import { Participant } from "src/participant/models/entity/participant.entity";
import { PlayerCreateService } from "src/players/use-cases/create-player/create-player.service";
export declare class MatchPairService {
    private readonly matchShuffleService;
    private readonly matchCreateService;
    private readonly matchUpdateService;
    private readonly playerCreateService;
    constructor(matchShuffleService: MatchShuffleService, matchCreateService: MatchCreateService, matchUpdateService: MatchUpdateService, playerCreateService: PlayerCreateService);
    execute(phaseId: string, participantsDto: Participant[]): Promise<import("../../models/entity/match.entity").Match | undefined>;
}
