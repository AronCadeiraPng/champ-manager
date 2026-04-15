import { Participant } from "src/participant/models/entity/participant.entity";
import { Repository } from "typeorm";
export declare class ParticipantFindService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participant>);
    findParticipantById(id: string): Promise<Participant>;
    findParticipantsByChampionship(championshipId: string): Promise<Participant[]>;
    findAllParticipants(): Promise<Participant[]>;
}
