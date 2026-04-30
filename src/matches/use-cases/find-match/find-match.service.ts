import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundException } from "src/common/exceptions";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";

@Injectable()
export class MatchFindService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>
    ) {}

    async ById(id: string): Promise<Match> {
        const match = await this.matchRepository.findOne({
            where: {
                id: id
            }
        })

        if(!match) throw new NotFoundException('Partida', id);

        return match;
    }

    async All(): Promise<Match[]> {
        return await this.matchRepository.find({
            relations: {
                players: true
            }
        });
    }
}