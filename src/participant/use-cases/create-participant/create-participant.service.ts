import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException } from '../../../_common/exceptions/bad-request.exception';
import { CreateParticipantDto } from '../../models/dtos/create-participant.dto';
import { Participant } from '../../models/entity/participant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantCreateService {
    constructor(
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>,
    ) {}

    async createParticipant(championshipId: string, createParticipantDto: CreateParticipantDto): Promise<Participant> {

        const participantExists = await this.participantRepository.findOne({
            where: {
                registrationUserId: createParticipantDto.registrationUserId,
                registrationTeamId: createParticipantDto.registrationTeamId
            }
        })

        if(participantExists) throw new BadRequestException('Participante já registrado', 400)

        const participant = this.participantRepository.create(createParticipantDto);

        return await this.participantRepository.save(participant);
    }
}
