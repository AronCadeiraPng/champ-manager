import { Injectable } from '@nestjs/common';
import { MatchShuffleService } from '../shuffle-match/shuffle-match.service';
import { MatchCreateService } from '../create-match/create-match.service';
import { Participant } from '../../../participant/models/entity/participant.entity';
import { PlayerCreateService } from '../../../players/use-cases/create-player/create-player.service';
import { CreatePlayerDto } from '../../../players/models/dtos/create-player.dto';
import { Match } from '../../models/entity/match.entity';
import { FindGroupByIdService } from '../../../groups/use-cases/find-by-id/find-by-id.service';

@Injectable()
export class MatchPairService {
    constructor(
        private readonly matchShuffleService: MatchShuffleService,
        private readonly matchCreateService: MatchCreateService,
        private readonly playerCreateService: PlayerCreateService,
    ) { }

    async execute(groupId: string, participantsDto: Participant[]) {
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

            console.log('ID DO GRUPO: ' + groupId);

            const match: Match = await this.matchCreateService.execute({ groupId: groupId})

            const playerOne = await this.playerCreateService.execute({ matchId: match.id, participantId: pair.playerOne.participantId });
            const playerTwo  = await this.playerCreateService.execute({ matchId: match.id, participantId: pair.playerTwo.participantId });

            matchPair.push({
                playerOne,
                playerTwo,
                match
            })
        }

        console.log(matchPair)

        return matchPair;
    }
}
