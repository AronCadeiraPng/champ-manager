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
exports.ChampionshipSoloCreateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
const championship_solo_entity_1 = require("../../models/entity/championship-solo.entity");
const find_championship_solo_service_1 = require("../find-championship/find-championship-solo.service");
let ChampionshipSoloCreateService = class ChampionshipSoloCreateService {
    championshipSoloRepository;
    championshipFindService;
    constructor(championshipSoloRepository, championshipFindService) {
        this.championshipSoloRepository = championshipSoloRepository;
        this.championshipFindService = championshipFindService;
    }
    async createChampionship(createChampionshipDto) {
        const championshipExists = await this.championshipFindService.findChampionshipSoloByName(createChampionshipDto.name);
        if (championshipExists)
            throw new bad_request_exception_1.BadRequestException('Torneio com este nome já existe', 400);
        const championship = this.championshipSoloRepository.create(createChampionshipDto);
        return this.championshipSoloRepository.save(championship);
    }
};
exports.ChampionshipSoloCreateService = ChampionshipSoloCreateService;
exports.ChampionshipSoloCreateService = ChampionshipSoloCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(championship_solo_entity_1.ChampionshipSolo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_championship_solo_service_1.ChampionshipSoloFindService])
], ChampionshipSoloCreateService);
//# sourceMappingURL=create-championship-solo.service.js.map