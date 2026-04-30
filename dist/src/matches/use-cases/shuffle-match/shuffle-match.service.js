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
exports.MatchShuffleService = void 0;
const common_1 = require("@nestjs/common");
let MatchShuffleService = class MatchShuffleService {
    constructor() { }
    async execute(participants) {
        const players = participants;
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [players[i], players[j]] = [players[j], players[i]];
        }
        console.log('player 1 sjufled:' + players[1]);
        return players;
    }
};
exports.MatchShuffleService = MatchShuffleService;
exports.MatchShuffleService = MatchShuffleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MatchShuffleService);
//# sourceMappingURL=shuffle-match.service.js.map