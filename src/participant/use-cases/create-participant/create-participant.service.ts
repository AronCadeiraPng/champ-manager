import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipFindService } from "src/championships/use-cases/find-championship/find-championship.service";
import { BadRequestException } from "src/common/exceptions/bad-request.exception";
import { CreateParticipantDto } from "src/participant/models/dtos/create-participant.dto";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Repository } from "typeorm";

@Injectable()
export class ParticipantCreateService {
    constructor(
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>,
        private readonly championshipFindService: ChampionshipFindService
    ) {}

    async createParticipant(championshipId: string, createParticipantDto: CreateParticipantDto): Promise<Participant> {
        const championship = await this.championshipFindService.findChampionshipById(championshipId);

        if(championship.modality == 'team-game' && createParticipantDto.registrationUserId == null)
        throw new BadRequestException('Torneio apenas para times', 400);

        if(championship.modality == 'solo-game' && createParticipantDto.registrationTeamId !== null)
            throw new BadRequestException('Torneio apenas para um jogador', 400);

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