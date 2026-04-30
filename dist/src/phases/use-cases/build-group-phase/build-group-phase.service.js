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
exports.BuildGroupPhaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pair_matches_service_1 = require("../../../matches/use-cases/pair-matches/pair-matches.service");
const find_participants_service_1 = require("../../../participant/use-cases/find-participants/find-participants.service");
const phase_entity_1 = require("../../entity/phase.entity");
const typeorm_2 = require("typeorm");
let BuildGroupPhaseService = class BuildGroupPhaseService {
    phaseRepository;
    participantFindService;
    pairMatchService;
    constructor(phaseRepository, participantFindService, pairMatchService) {
        this.phaseRepository = phaseRepository;
        this.participantFindService = participantFindService;
        this.pairMatchService = pairMatchService;
    }
    async execute(createPhaseDto) {
        const phase = await this.phaseRepository.save(createPhaseDto);
        const participants = await this.participantFindService.findParticipantsByChampionship(createPhaseDto.championshipId);
        await this.pairMatchService.execute(phase.id, participants);
        return phase;
    }
};
exports.BuildGroupPhaseService = BuildGroupPhaseService;
exports.BuildGroupPhaseService = BuildGroupPhaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phase_entity_1.Phase)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_participants_service_1.ParticipantFindService,
        pair_matches_service_1.MatchPairService])
], BuildGroupPhaseService);
//# sourceMappingURL=build-group-phase.service.js.map