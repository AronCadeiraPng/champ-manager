import { Timestamp } from "typeorm";
import { Phase } from "src/phases/entity/phase.entity";
import { Player } from "src/players/models/entity/player.entity";
import { MatchStatusEnum } from "src/common/enums/match-status.enum";
export declare class Match {
    id: string;
    winnerId?: string;
    status: MatchStatusEnum;
    phaseId: string;
    players?: Player[];
    phase?: Phase;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
