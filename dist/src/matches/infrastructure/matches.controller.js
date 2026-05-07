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
exports.MatchesController = void 0;
const common_1 = require("@nestjs/common");
const create_match_service_1 = require("../use-cases/create-match/create-match.service");
const create_match_dto_1 = require("../models/dtos/create-match.dto");
const find_match_service_1 = require("../use-cases/find-match/find-match.service");
const championship_status_enum_1 = require("../../common/enums/championship-status.enum");
const set_winner_service_1 = require("../use-cases/set-winner/set-winner.service");
const get_winners_service_1 = require("../use-cases/get-winners/get-winners.service");
const phase_name_enum_1 = require("../../common/enums/phase-name.enum");
let MatchesController = class MatchesController {
    matchCreateService;
    matchFindService;
    matchSetWinnerService;
    matchGetWinnersService;
    constructor(matchCreateService, matchFindService, matchSetWinnerService, matchGetWinnersService) {
        this.matchCreateService = matchCreateService;
        this.matchFindService = matchFindService;
        this.matchSetWinnerService = matchSetWinnerService;
        this.matchGetWinnersService = matchGetWinnersService;
    }
    async findAllMatches() {
        return await this.matchFindService.All();
    }
    async findAllWinersFromPhase(championshipId, phase) {
        return await this.matchGetWinnersService.execute(championshipId, phase);
    }
    async setWinner(playerId) {
        return await this.matchSetWinnerService.execute(playerId);
    }
    async findMatchByParticipant(participantId) {
        return await this.matchFindService.ByParticipant(participantId);
    }
    async createMatch(phaseId, createMatchDto) {
        return this.matchCreateService.execute(createMatchDto);
    }
    async findByChampionshipStatus(championshipId, status) {
        return this.matchFindService.ByPhase(championshipId, status);
    }
};
exports.MatchesController = MatchesController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MatchesController.prototype, "findAllMatches", null);
__decorate([
    (0, common_1.Get)(':id/:phase/participants/all'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MatchesController.prototype, "findAllWinersFromPhase", null);
__decorate([
    (0, common_1.Post)(':id/set-point'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchesController.prototype, "setWinner", null);
__decorate([
    (0, common_1.Get)('participant/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchesController.prototype, "findMatchByParticipant", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_match_dto_1.CreateMatchDto]),
    __metadata("design:returntype", Promise)
], MatchesController.prototype, "createMatch", null);
__decorate([
    (0, common_1.Get)(':id/:status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MatchesController.prototype, "findByChampionshipStatus", null);
exports.MatchesController = MatchesController = __decorate([
    (0, common_1.Controller)('matches'),
    __metadata("design:paramtypes", [create_match_service_1.MatchCreateService,
        find_match_service_1.MatchFindService,
        set_winner_service_1.MatchSetWinnerService,
        get_winners_service_1.MatchGetWinnersService])
], MatchesController);
//# sourceMappingURL=matches.controller.js.map