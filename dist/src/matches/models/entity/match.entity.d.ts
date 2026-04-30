import { Timestamp } from "typeorm";
import { Phase } from "src/phases/entity/phase.entity";
import { Player } from "src/players/models/entity/player.entity";
export declare class Match {
    id: string;
    winnerId?: string;
    phaseId: string;
    players?: Player[];
    phase?: Phase;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
