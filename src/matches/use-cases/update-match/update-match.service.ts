import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from '../../models/entity/match.entity';
import { Repository } from 'typeorm';
import { MatchFindService } from '../find-match/find-match.service';
import { Player } from '../../../players/models/entity/player.entity';
import { UpdateMatchDto } from '../../models/dtos/update-match.dto';

@Injectable()
export class MatchUpdateService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
        private readonly matchFindService: MatchFindService
    ) { }

    async execute(matchId: string, updateMatchDto: UpdateMatchDto) {
        const match = await this.matchFindService.ById(matchId);

        Object.assign(match, updateMatchDto);

        return this.matchRepository.save(match);
    }
}
