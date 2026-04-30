import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Participant } from "src/participant/models/entity/participant.entity";
import { Repository } from "typeorm";

@Injectable()
export class ParticipantFindService {
    constructor(
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>
    ) {}

    async findParticipantById(id: string): Promise<Participant> {
        const participant = await this.participantRepository.findOne({
            where: {
                id: id
            }
        })

        if(!participant) throw new BadRequestException('Participante', id);

        return participant;
    }

    async findParticipantsByChampionship(championshipId: string): Promise<Participant[]> {
        const participants = await this.participantRepository.find({
            where: {
                registrationSolo: {
                    championshipId: championshipId
                }
            },
            relations: {
                registrationSolo: true
            }
        })

        return participants;
    }

    async findAllParticipants(): Promise<Participant[]> {
        return await this.participantRepository.find({
            relations: {
                registrationSolo: true
            }
        });
    }
}