import { Participant } from "src/participant/models/entity/participant.entity";
export declare class MatchShuffleService {
    constructor();
    execute(participants: Participant[]): Promise<Participant[]>;
}
