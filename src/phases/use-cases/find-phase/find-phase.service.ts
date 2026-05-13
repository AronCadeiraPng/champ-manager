import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '../../../common/exceptions';
import { Phase } from '../../entity/phase.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhaseFindService {
    @InjectRepository(Phase) private readonly phaseRepository: Repository<Phase>

    async ById(id: string): Promise<Phase> {
        const phase = await this.phaseRepository.findOne({
            where: {
                id: id
            }
        })

        if(!phase) throw new NotFoundException('Fase', id);

        return phase;
    }

    async ByChampionship(championshipId: string): Promise<Phase[]> {
        return await this.phaseRepository.find({
            where: {
                championshipId: championshipId
            }
        })
    }

    // async ByChampionshipStatus(championshipId: string, status: PhaseEnum): Promise<Phase> {
    //     const phase = await this.phaseRepository.findOne({
    //         where: {
    //             championshipId: championshipId,
    //             championship: {
    //                 status: status
    //             }
    //         }
    //     })

    //     if(!phase) throw new NotFoundException('Fase', championshipId);

    //     return phase;
    // }
}
