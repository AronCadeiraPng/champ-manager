import { Injectable } from "@nestjs/common";
import { MatchShuffleService } from "../shuffle-match/shuffle-match.service";
import { MatchCreateService } from "../create-match/create-match.service";
import { MatchUpdateService } from "../update-match/update-match.service";
import { Participant } from "src/participant/models/entity/participant.entity";
import { PlayerCreateService } from "src/players/use-cases/create-player/create-player.service";

@Injectable()
export class MatchPairService {
    constructor(
        private readonly matchShuffleService: MatchShuffleService,
        private readonly matchCreateService: MatchCreateService,
        private readonly matchUpdateService: MatchUpdateService,
        private readonly playerCreateService: PlayerCreateService
    ) { }

    async execute(phaseId: string, participantsDto: Participant[]) {

        const shuffled = await this.matchShuffleService.execute(participantsDto);

        let participants = shuffled;

          for (let i = 0; i < participants.length; i++) {
            for (let j = i + 1; j < participants.length; j++) {

              let matchParticipants = ([participants[i], participants[j]]);

              const players = await Promise.all(
                matchParticipants.map(async (participant) => {
                let playerDto = {
                    matchId: match.id,
                    participantId: participant.id
                }

                return this.playerCreateService.execute(playerDto);
            })

            
          }

        for(let i = 0, j = 1; i < (participants.length); i++, j++) {
            let match = await this.matchCreateService.execute({
                phaseId: phaseId
            });

             [participants[i], participants[j]];

            
        )

            console.log(players.length);

            return await this.matchUpdateService.execute(match.id, players);
        }
    }
}