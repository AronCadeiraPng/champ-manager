import { Injectable } from "@nestjs/common";
import { MatchShuffleService } from "../shuffle-match/shuffle-match.service";
import { MatchCreateService } from "../create-match/create-match.service";
import { Participant } from "src/participant/models/entity/participant.entity";
import { PlayerCreateService } from "src/players/use-cases/create-player/create-player.service";
import { CreatePlayerDto } from "src/players/models/dtos/create-player.dto";
import { Match } from "src/matches/models/entity/match.entity";

@Injectable()
export class MatchPairService {
    constructor(
        private readonly matchShuffleService: MatchShuffleService,
        private readonly matchCreateService: MatchCreateService,
        private readonly playerCreateService: PlayerCreateService,
    ) { }

    async execute(phaseId: string, participantsDto: Participant[]) {
        const participants: Participant[] = await this.matchShuffleService.execute(participantsDto);

        const matchPairs: { playerOne: CreatePlayerDto, playerTwo: CreatePlayerDto }[] = []
        for (let i = 0; i < participants.length; i++) {
            for (let j = i + 1; j < participants.length; j++) {
                const playerOne: CreatePlayerDto = {
                    matchId: '',
                    participantId: participants[i].id
                }
                const playerTwo: CreatePlayerDto = {
                    matchId: '',
                    participantId: participants[j].id
                }
                matchPairs.push({ playerOne, playerTwo })
            }
        }
        const matchPair: any = []

        for (let i = 0; i < matchPairs.length; i++) {
            const pair = matchPairs[i];

            const match: Match = await this.matchCreateService.execute({ phaseId: phaseId })

            const playerOne = await this.playerCreateService.execute({ matchId: match.id, participantId: pair.playerOne.participantId });
            const playerTwo  = await this.playerCreateService.execute({ matchId: match.id, participantId: pair.playerTwo.participantId });

            matchPair.push({
                playerOne,
                playerTwo,
                match
            })
        }

        return matchPair;
    }
}