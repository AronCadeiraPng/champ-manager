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
exports.StartGroupPhaseService = void 0;
const common_1 = require("@nestjs/common");
const build_group_phase_service_1 = require("../../../phases/use-cases/build-group-phase/build-group-phase.service");
const find_championship_service_1 = require("../find-championship/find-championship.service");
let StartGroupPhaseService = class StartGroupPhaseService {
    buildGroupPhaseService;
    championshipFindService;
    constructor(buildGroupPhaseService, championshipFindService) {
        this.buildGroupPhaseService = buildGroupPhaseService;
        this.championshipFindService = championshipFindService;
    }
    async execute(createPhaseDto) {
        await this.championshipFindService.findChampionshipById(createPhaseDto.championshipId);
        return await this.buildGroupPhaseService.execute(createPhaseDto);
    }
};
exports.StartGroupPhaseService = StartGroupPhaseService;
exports.StartGroupPhaseService = StartGroupPhaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [build_group_phase_service_1.BuildGroupPhaseService,
        find_championship_service_1.ChampionshipFindService])
], StartGroupPhaseService);
//# sourceMappingURL=start-group-phase.service.js.map