import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMatchDto } from '../../models/dtos/create-match.dto';
import { Match } from '../../models/entity/match.entity';

@Injectable()
export class MatchCreateService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
    ) { }

    async execute(createMatchDto: CreateMatchDto) {
        return await this.matchRepository.save(createMatchDto);
    }
}