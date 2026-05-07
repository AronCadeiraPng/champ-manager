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
exports.PhaseBuildOctaveService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pair_matches_service_1 = require("../../../matches/use-cases/pair-matches/pair-matches.service");
const phase_entity_1 = require("../../entity/phase.entity");
const typeorm_2 = require("typeorm");
const find_player_service_1 = require("../../../players/use-cases/find-player/find-player.service");
const find_participants_service_1 = require("../../../participant/use-cases/find-participants/find-participants.service");
const get_winners_service_1 = require("../../../matches/use-cases/get-winners/get-winners.service");
let PhaseBuildOctaveService = class PhaseBuildOctaveService {
    phaseRepository;
    matchGetWinnersService;
    participantFindService;
    matchPairService;
    playerFindService;
    constructor(phaseRepository, matchGetWinnersService, participantFindService, matchPairService, playerFindService) {
        this.phaseRepository = phaseRepository;
        this.matchGetWinnersService = matchGetWinnersService;
        this.participantFindService = participantFindService;
        this.matchPairService = matchPairService;
        this.playerFindService = playerFindService;
    }
    async execute(championshipId) {
        const phaseDto = {
            championshipId: championshipId
        };
        const phase = await this.phaseRepository.save(phaseDto);
        const groupPhaseWinners = await this.matchGetWinnersService.execute(phase.championshipId, phaseDto.name);
        const participants = await this.participantFindService.ByPlayer(groupPhaseWinners);
        console.log('------------------------------------------------------------------------\n', participants);
    }
};
exports.PhaseBuildOctaveService = PhaseBuildOctaveService;
exports.PhaseBuildOctaveService = PhaseBuildOctaveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phase_entity_1.Phase)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        get_winners_service_1.MatchGetWinnersService,
        find_participants_service_1.ParticipantFindService,
        pair_matches_service_1.MatchPairService,
        find_player_service_1.PlayerFindService])
], PhaseBuildOctaveService);
//# sourceMappingURL=build-octave-phase.service.js.map