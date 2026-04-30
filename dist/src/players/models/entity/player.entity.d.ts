import { Match } from "src/matches/models/entity/match.entity";
import { Participant } from "src/participant/models/entity/participant.entity";
export declare class Player {
    id: string;
    points?: number;
    matchId: string;
    participantId: string;
    participant?: Participant;
    match?: Match;
}
