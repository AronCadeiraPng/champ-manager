import { Injectable } from "@nestjs/common";

@Injectable()
export class MatchShuffleService {
    constructor(){}

    async execute(participants: string[]) {
        const players = [...participants];
        
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [players[i], players[j]] = [players[j], players[i]];
        }
        return players;
    }
}