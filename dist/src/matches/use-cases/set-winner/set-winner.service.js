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
exports.MatchSetWinnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const match_entity_1 = require("../../models/entity/match.entity");
const find_player_service_1 = require("../../../players/use-cases/find-player/find-player.service");
const update_player_service_1 = require("../../../players/use-cases/update-player/update-player.service");
const typeorm_2 = require("typeorm");
let MatchSetWinnerService = class MatchSetWinnerService {
    matchRepository;
    playerFindService;
    playerUpdateService;
    constructor(matchRepository, playerFindService, playerUpdateService) {
        this.matchRepository = matchRepository;
        this.playerFindService = playerFindService;
        this.playerUpdateService = playerUpdateService;
    }
    async execute(playerId) {
        const playerUpdateDto = {
            points: 2
        };
        return await this.playerUpdateService.execute(playerId, playerUpdateDto);
    }
};
exports.MatchSetWinnerService = MatchSetWinnerService;
exports.MatchSetWinnerService = MatchSetWinnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_player_service_1.PlayerFindService,
        update_player_service_1.PlayerUpdateService])
], MatchSetWinnerService);
//# sourceMappingURL=set-winner.service.js.map