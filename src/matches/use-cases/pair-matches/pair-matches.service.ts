import { Injectable } from "@nestjs/common";
import { MatchShuffleService } from "../shuffle-match/shuffle-match.service";
import { MatchCreateService } from "../create-match/create-match.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";

@Injectable()
export class MatchPairService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
        private readonly matchShuffleService: MatchShuffleService,
        private readonly matchCreateService: MatchCreateService
    ) {}

    async execute(participants: string[]) {
        const shuffled = await this.matchShuffleService.execute(participants);

        for (let i = 0; i < shuffled.length; i += 2) {
            if (i + 1 < shuffled.length) {
                return this.matchRepository.save({
                 
                })
            } else {
                
            }
        }
    }
}