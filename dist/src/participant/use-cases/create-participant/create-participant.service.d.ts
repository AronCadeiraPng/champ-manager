import { ChampionshipFindService } from "src/championships/use-cases/find-championship/find-championship.service";
import { CreateParticipantDto } from "src/participant/models/dtos/create-participant.dto";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Repository } from "typeorm";
export declare class ParticipantCreateService {
    private readonly participantRepository;
    private readonly championshipFindService;
    constructor(participantRepository: Repository<Participant>, championshipFindService: ChampionshipFindService);
    createParticipant(championshipId: string, createParticipantDto: CreateParticipantDto): Promise<Participant>;
}
