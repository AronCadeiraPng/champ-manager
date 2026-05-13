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
exports.MatchFindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exceptions_1 = require("../../../common/exceptions");
const match_entity_1 = require("../../models/entity/match.entity");
const typeorm_2 = require("typeorm");
let MatchFindService = class MatchFindService {
    matchRepository;
    constructor(matchRepository) {
        this.matchRepository = matchRepository;
    }
    async ById(id) {
        const match = await this.matchRepository.findOne({
            where: {
                id: id
            }
        });
        if (!match)
            throw new exceptions_1.NotFoundException('Partida', id);
        return match;
    }
    async ByChampionship(championshipId) {
        const match = await this.matchRepository.findOne({
            where: {
                group: {
                    championshipId: championshipId
                }
            }
        });
        if (!match)
            throw new exceptions_1.NotFoundException('Partida', `id do campeonato: ${championshipId}`);
        return match;
    }
    async ByParticipant(participantId) {
        return await this.matchRepository.query(`
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
    async ByPhase(championshipId, phaseStatus) {
        const matches = await this.matchRepository.find({});
        if (!matches)
            throw new exceptions_1.NotFoundException('Torneio', 400);
        return matches;
    }
    async All() {
        return await this.matchRepository.find({
            relations: {
                players: true
            }
        });
    }
};
exports.MatchFindService = MatchFindService;
exports.MatchFindService = MatchFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MatchFindService);
//# sourceMappingURL=find-match.service.js.map