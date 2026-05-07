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
exports.PhasesController = void 0;
const common_1 = require("@nestjs/common");
const create_phase_dto_1 = require("../dtos/create-phase.dto");
const create_phase_service_1 = require("../use-cases/create-phase/create-phase.service");
const find_phase_service_1 = require("../use-cases/find-phase/find-phase.service");
const build_octave_phase_service_1 = require("../use-cases/build-octave-phase/build-octave-phase.service");
let PhasesController = class PhasesController {
    phaseCreateService;
    phaseFindService;
    phaseBuildOctaveService;
    constructor(phaseCreateService, phaseFindService, phaseBuildOctaveService) {
        this.phaseCreateService = phaseCreateService;
        this.phaseFindService = phaseFindService;
        this.phaseBuildOctaveService = phaseBuildOctaveService;
    }
    async startOctave(championshipId) {
        return await this.phaseBuildOctaveService.execute(championshipId);
    }
    async createPhase(createPhaseDto) {
        return await this.phaseCreateService.execute(createPhaseDto);
    }
    async findByChampionship(championshipId) {
        return await this.phaseFindService.ByChampionship(championshipId);
    }
};
exports.PhasesController = PhasesController;
__decorate([
    (0, common_1.Post)(':championship/octave'),
    __param(0, (0, common_1.Param)('championship', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhasesController.prototype, "startOctave", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phase_dto_1.CreatePhaseDto]),
    __metadata("design:returntype", Promise)
], PhasesController.prototype, "createPhase", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhasesController.prototype, "findByChampionship", null);
exports.PhasesController = PhasesController = __decorate([
    (0, common_1.Controller)('phases'),
    __metadata("design:paramtypes", [create_phase_service_1.PhaseCreateService,
        find_phase_service_1.PhaseFindService,
        build_octave_phase_service_1.PhaseBuildOctaveService])
], PhasesController);
//# sourceMappingURL=phases.controller.js.map