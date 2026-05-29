import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateMatchDto } from "../../models/dtos/update-match.dto";
import { Match } from "../../models/entity/match.entity";
import { MatchFindService } from "../find-match/find-match.service";


@Injectable()
export class MatchUpdateService {
    constructor(
        @InjectRepository(Match) 
        private readonly matchRepository: Repository<Match>,

        private readonly matchFindService: MatchFindService
    ) { }

    async execute(matchId: string, updateMatchDto: UpdateMatchDto) {
        let match = await this.matchFindService.ById(matchId);
        // const teste = new Match();
        // teste.group = updateMatchDto.group
        // teste.groupId = updateMatchDto.groupId
        // teste.players = updateMatchDto.players
        // teste.winnerId = updateMatchDto.winnerId
        // teste.id = match.id
        // teste.createdAt = match.createdAt
        // teste.status = match.status
        // teste.updatedAt = match.updatedAt

        match = Object.assign(match, updateMatchDto);

        const updatedMatch = await this.matchRepository.save(match);
        console.log(updatedMatch)
        return updatedMatch;
    }
}
