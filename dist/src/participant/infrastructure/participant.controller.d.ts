import { ParticipantFindService } from '../use-cases/find-participants/find-participants.service';
import { Participant } from '../models/entity/participant.entity';
export declare class ParticipantController {
    private readonly participantFindService;
    constructor(participantFindService: ParticipantFindService);
    findAllParticipants(): Promise<Participant[]>;
    findParticipantsByChampionship(championshipId: string): Promise<Participant[]>;
}
