import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";
import { MatchFindService } from "../find-match/find-match.service";
import { Player } from "src/players/models/entity/player.entity";

@Injectable()
export class MatchUpdateService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
        private readonly matchFindService: MatchFindService
    ) { }

    async execute(matchId: string, players: Player[]) {
        console.log('match atualizada para adicionar os players...')
        const match = await this.matchFindService.ById(matchId);
        const matchUpdate = {
            players: players
        }

        console.log('match atualizada' + match)

        Object.assign(match, matchUpdate);

        return this.matchRepository.save(match);
    }
}
