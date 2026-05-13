import { Timestamp } from "typeorm";
import { Player } from "src/players/models/entity/player.entity";
import { MatchStatusEnum } from "src/common/enums/match-status.enum";
import { Group } from "src/groups/models/entity/group.entity";
export declare class Match {
    id: string;
    winnerId?: string;
    status: MatchStatusEnum;
    groupId: string;
    players?: Player[];
    group?: Group;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
