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
exports.PhaseCreateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const find_championship_service_1 = require("../../../championships/use-cases/find-championship/find-championship.service");
const find_participants_service_1 = require("../../../participant/use-cases/find-participants/find-participants.service");
const phase_entity_1 = require("../../entity/phase.entity");
const build_group_phase_service_1 = require("../build-group-phase/build-group-phase.service");
let PhaseCreateService = class PhaseCreateService {
    phaseRepository;
    championshipFindService;
    participantFindService;
    groupFaseBuildService;
    constructor(phaseRepository, championshipFindService, participantFindService, groupFaseBuildService) {
        this.phaseRepository = phaseRepository;
        this.championshipFindService = championshipFindService;
        this.participantFindService = participantFindService;
        this.groupFaseBuildService = groupFaseBuildService;
    }
    async execute(createPhaseDto) {
        await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);
        await this.participantFindService.findParticipantsByChampionship(createPhaseDto.championshipId);
        return await this.phaseRepository.save(createPhaseDto);
    }
};
exports.PhaseCreateService = PhaseCreateService;
exports.PhaseCreateService = PhaseCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phase_entity_1.Phase)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_championship_service_1.ChampionshipFindService,
        find_participants_service_1.ParticipantFindService,
        build_group_phase_service_1.BuildGroupPhaseService])
], PhaseCreateService);
//# sourceMappingURL=create-phase.service.js.map