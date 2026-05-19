import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '../../../_common/exceptions';
import { BadRequestException } from '../../../_common/exceptions/bad-request.exception';
import { Participant } from '../../models/entity/participant.entity';
import { Player } from '../../../players/models/entity/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantFindService {
    constructor(
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>
    ) { }

    async findParticipantById(id: string): Promise<Participant> {
        const participant = await this.participantRepository.findOne({
            where: {
                id: id
            }
        })

        if (!participant) throw new NotFoundException('Participante', id);

        return participant;
    }

    async ByPlayer(players: Player[]) {
        const participants = Promise.all(
            players.map(async (player) => {
                return await this.participantRepository.find({
                    where: {
                        id: player.participantId
                    },
                    relations: {
                        player: true
                    }
                })
            })
        )

        if (!participants) throw new BadRequestException('Participantes não encontrados', 400);

        return participants;
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
