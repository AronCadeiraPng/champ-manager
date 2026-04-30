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
exports.MatchUpdateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const match_entity_1 = require("../../models/entity/match.entity");
const typeorm_2 = require("typeorm");
const find_match_service_1 = require("../find-match/find-match.service");
let MatchUpdateService = class MatchUpdateService {
    matchRepository;
    matchFindService;
    constructor(matchRepository, matchFindService) {
        this.matchRepository = matchRepository;
        this.matchFindService = matchFindService;
    }
    async execute(matchId, players) {
        console.log('match atualizada para adicionar os players...');
        const match = await this.matchFindService.ById(matchId);
        const matchUpdate = {
            players: players
        };
        console.log('match atualizada' + match);
        Object.assign(match, matchUpdate);
        return this.matchRepository.save(match);
    }
};
exports.MatchUpdateService = MatchUpdateService;
exports.MatchUpdateService = MatchUpdateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_match_service_1.MatchFindService])
], MatchUpdateService);
//# sourceMappingURL=update-match.service.js.map