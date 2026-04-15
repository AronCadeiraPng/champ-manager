import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateParticipantDto } from "src/participant/models/dtos/create-participant.dto";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Repository } from "typeorm";

@Injectable()
export class ParticipantCreateService {
    constructor(
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>
    ) {}

    async createParticipant(createParticipantDto: CreateParticipantDto): Promise<Participant> {
        const participant = this.participantRepository.create(createParticipantDto);

        return await this.participantRepository.save(participant);
    }
}