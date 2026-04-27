import { Participant } from "src/participant/models/entity/participant.entity";
import { Timestamp } from "typeorm";
export declare class Match {
    id: string;
    name: string;
    winnerId?: string;
    participants: Participant[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
