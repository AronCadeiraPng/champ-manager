import { ParticipantFindService } from '../use-cases/find-participants/find-participants.service';
import { Participant } from '../models/entity/participant.entity';
import { ParticipantCreateService } from '../use-cases/create-participant/create-participant.service';
import { CreateParticipantDto } from '../models/dtos/create-participant.dto';
export declare class ParticipantController {
    private readonly participantFindService;
    private readonly participantCreateService;
    constructor(participantFindService: ParticipantFindService, participantCreateService: ParticipantCreateService);
    createParticipant(championshipId: string, createParticipantDto: CreateParticipantDto): Promise<Participant>;
    findAllParticipants(): Promise<Participant[]>;
    findParticipantsByChampionship(championshipId: string): Promise<Participant[]>;
}
