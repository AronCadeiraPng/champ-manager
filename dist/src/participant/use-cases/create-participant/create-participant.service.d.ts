import { CreateParticipantDto } from "src/participant/models/dtos/create-participant.dto";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Repository } from "typeorm";
export declare class ParticipantCreateService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participant>);
    createParticipant(createParticipantDto: CreateParticipantDto): Promise<Participant>;
}
