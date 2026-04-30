import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMatchDto } from "src/matches/models/dtos/create-match.dto";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";

@Injectable()
export class MatchCreateService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
    ) { }

    async execute(createMatchDto: CreateMatchDto) {
        const match = await this.matchRepository.save(createMatchDto);
        console.log('match criada');

        return match;
    }
}