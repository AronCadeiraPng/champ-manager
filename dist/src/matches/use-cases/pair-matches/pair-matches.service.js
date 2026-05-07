"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchPairService = void 0;
const common_1 = require("@nestjs/common");
const shuffle_match_service_1 = require("../shuffle-match/shuffle-match.service");
const create_match_service_1 = require("../create-match/create-match.service");
const create_player_service_1 = require("../../../players/use-cases/create-player/create-player.service");
let MatchPairService = class MatchPairService {
    matchShuffleService;
    matchCreateService;
    playerCreateService;
    constructor(matchShuffleService, matchCreateService, playerCreateService) {
        this.matchShuffleService = matchShuffleService;
        this.matchCreateService = matchCreateService;
        this.playerCreateService = playerCreateService;
    }
    async execute(phaseId, participantsDto) {
        const participants = await this.matchShuffleService.execute(participantsDto);
        const matchPairs = [];
        for (let i = 0; i < participants.length; i++) {
            for (let j = i + 1; j < participants.length; j++) {
                const playerOne = {
                    matchId: '',
                    participantId: participants[i].id
                };
                const playerTwo = {
                    matchId: '',
                    participantId: participants[j].id
                };
                matchPairs.push({ playerOne, playerTwo });
            }
        }
        const matchPair = [];
        for (let i = 0; i < matchPairs.length; i++) {
            const pair = matchPairs[i];
            const match = await this.matchCreateService.execute({ phaseId: phaseId });
            const playerOne = await this.playerCreateService.execute({ matchId: match.id, participantId: pair.playerOne.participantId });
            const playerTwo = await this.playerCreateService.execute({ matchId: match.id, participantId: pair.playerTwo.participantId });
            matchPair.push({
                playerOne,
                playerTwo,
                match
            });
        }
        return matchPair;
    }
};
exports.MatchPairService = MatchPairService;
exports.MatchPairService = MatchPairService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shuffle_match_service_1.MatchShuffleService,
        create_match_service_1.MatchCreateService,
        create_player_service_1.PlayerCreateService])
], MatchPairService);
//# sourceMappingURL=pair-matches.service.js.map