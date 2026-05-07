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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchGetWinnersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const match_entity_1 = require("../../models/entity/match.entity");
const typeorm_2 = require("typeorm");
const find_match_service_1 = require("../find-match/find-match.service");
let MatchGetWinnersService = class MatchGetWinnersService {
    matchRepository;
    matchFindService;
    constructor(matchRepository, matchFindService) {
        this.matchRepository = matchRepository;
        this.matchFindService = matchFindService;
    }
    async execute(championshipId, phaseStatus) {
        const matches = await this.matchFindService.ByPhase(championshipId, phaseStatus);
        const winners = await Promise.all(matches.map(async (match) => {
            const winnerArray = await this.matchRepository.query(`
                    SELECT 
                        p.id as "id",
                        p.points
                    FROM 
                        players p
                    WHERE
                        p.match_id = $1
                    ORDER BY
                        p.points
                    DESC LIMIT 1`, [match.id]);
            const winner = winnerArray.find(winner => winner.id == winner.id);
            return winner;
        }));
        return winners;
    }
};
exports.MatchGetWinnersService = MatchGetWinnersService;
exports.MatchGetWinnersService = MatchGetWinnersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_match_service_1.MatchFindService])
], MatchGetWinnersService);
//# sourceMappingURL=get-winners.service.js.map