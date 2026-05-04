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
exports.ChampionshipOctavePhaseService = void 0;
const common_1 = require("@nestjs/common");
const find_championship_service_1 = require("../find-championship/find-championship.service");
const championship_status_enum_1 = require("../../../common/enums/championship-status.enum");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
const build_octave_phase_service_1 = require("../../../phases/use-cases/build-octave-phase/build-octave-phase.service");
let ChampionshipOctavePhaseService = class ChampionshipOctavePhaseService {
    championshipFindService;
    buildOctavePhase;
    constructor(championshipFindService, buildOctavePhase) {
        this.championshipFindService = championshipFindService;
        this.buildOctavePhase = buildOctavePhase;
    }
    async execute(createPhaseDto) {
        const championship = await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);
        if (championship.status == championship_status_enum_1.StatusEnum.OCTAVE_PHASE)
            throw new bad_request_exception_1.BadRequestException('Este torneio já está em fase de grupo', 400);
        await this.buildOctavePhase.execute(createPhaseDto);
    }
};
exports.ChampionshipOctavePhaseService = ChampionshipOctavePhaseService;
exports.ChampionshipOctavePhaseService = ChampionshipOctavePhaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_championship_service_1.ChampionshipFindService,
        build_octave_phase_service_1.PhaseBuildOctaveService])
], ChampionshipOctavePhaseService);
//# sourceMappingURL=start-octave-phase.service.js.map