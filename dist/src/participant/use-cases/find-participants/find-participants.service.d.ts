import { Participant } from "src/participant/models/entity/participant.entity";
import { Player } from "src/players/models/entity/player.entity";
import { Repository } from "typeorm";
export declare class ParticipantFindService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participant>);
    findParticipantById(id: string): Promise<Participant>;
    ByPlayer(players: Player[]): Promise<Participant[][]>;
    findParticipantsByChampionship(championshipId: string): Promise<Participant[]>;
    findAllParticipants(): Promise<Participant[]>;
}
