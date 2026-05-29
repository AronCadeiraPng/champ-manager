import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Championship } from '../../models/entity/championship.entity';
import { Repository } from 'typeorm';
import { ChampionshipStatusEnum } from '../../../../_common/enums/championship-status.enum';

@Injectable()
export class ChampionshipSchedulerService {
    constructor(
        @InjectRepository(Championship) private readonly championshipRepository: Repository<Championship>
    ) { }

    @Cron('0 */30 6-12 * * *')
    async handleTournamentStatus() {
        const now = new Date();

        await this.championshipRepository
            .createQueryBuilder()
            .update(Championship)
            .set({ status: ChampionshipStatusEnum.IN_PROGRESS })
            .where('registrationEnd < :now', { now })
            .andWhere('status != :status', {
                status: ChampionshipStatusEnum.IN_PROGRESS,
            })
            .andWhere('status != :statusFinished', {
                statusFinished: ChampionshipStatusEnum.FINISHED
            })
            .execute();
    }
}