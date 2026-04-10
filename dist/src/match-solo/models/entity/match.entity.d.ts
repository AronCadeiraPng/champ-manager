import { MatchStatusEnum } from "src/common/enums/match-status.enum";
import { Timestamp } from "typeorm";
export declare class Match {
    id: string;
    status?: MatchStatusEnum;
    createdAt: Timestamp;
    finishedAt: Timestamp;
}
