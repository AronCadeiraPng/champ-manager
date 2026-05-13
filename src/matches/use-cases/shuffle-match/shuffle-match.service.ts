import { Injectable } from '@nestjs/common';
import { Participant } from '../../../participant/models/entity/participant.entity';

@Injectable()
export class MatchShuffleService {
    constructor(){}

    async execute(participants: Participant[]) {
        const players = participants;
        
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [players[i], players[j]] = [players[j], players[i]];
        }
        
        return players;
    }
}
