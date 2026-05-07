import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipFindService } from "src/championships/use-cases/find-championship/find-championship.service";
import { PhaseEnum } from "src/common/enums/phase-name.enum";
import { NotFoundException } from "src/common/exceptions";
import { Match } from "src/matches/models/entity/match.entity";
import { Repository } from "typeorm";

@Injectable()
export class MatchFindService {
    constructor(
        @InjectRepository(Match) private readonly matchRepository: Repository<Match>,
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

    async ByChampionship(championshipId: string): Promise<Match> {
        const match =  await this.matchRepository.findOne({
            where: {
                phase: {
                    championshipId: championshipId
                }
            }
        })

        if(!match) throw new NotFoundException('Partida', `id do campeonato: ${championshipId}`);

        return match;
    }

    async ByParticipant(participantId: string): Promise<Match[]>{
        return await this.matchRepository.query(/*sql*/`
            SELECT
                match.id, 
                match.winner_id,
                match.phase_id,
                json_agg(
                    json_build_object(
                    'id', players.id,
                    'participant_id', players.participant_id
                    )
                ) as players
            FROM
                public.matches as match
            JOIN
                public.players as players
            ON
                match.id = players.match_id
            WHERE match.id IN (
                SELECT 
                    public.matches.id
                FROM 
                    public.matches 
                JOIN 
                    public.players 
                ON 
                    public.matches.id = public.players.match_id
                WHERE
                    public.players.participant_id = $1
            )
            GROUP BY match.id, match.winner_id, match.phase_id
            `, [participantId]);
    }

    async ByPhase(championshipId: string, phaseStatus: PhaseEnum): Promise<Match[]> {
        const matches = await this.matchRepository.find({
            where: {
                phase: {
                    name: phaseStatus,
                    championship: {
                        id: championshipId
                    }
                }
            },
            relations: {
                phase: {
                    championship: true
                }
            }
        })

        if(!matches) throw new NotFoundException('Torneio', 400)

        return matches;
    }

    async All(): Promise<Match[]> {
        return await this.matchRepository.find({
            relations: {
                players: true
            }
        });
    }
}