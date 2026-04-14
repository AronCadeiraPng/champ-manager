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
exports.ChampionshipCreateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
const find_sport_service_1 = require("../../../sports/use-cases/find-sport/find-sport.service");
const championship_entity_1 = require("../../models/entity/championship.entity");
const find_championship_service_1 = require("../find-championship/find-championship.service");
let ChampionshipCreateService = class ChampionshipCreateService {
    championshipRepository;
    championshipFindService;
    sportFindService;
    constructor(championshipRepository, championshipFindService, sportFindService) {
        this.championshipRepository = championshipRepository;
        this.championshipFindService = championshipFindService;
        this.sportFindService = sportFindService;
    }
    async createChampionship(createChampionshipDto) {
        const championshipExists = await this.championshipFindService.findChampionshipByName(createChampionshipDto.name);
        await this.sportFindService.findSportById(createChampionshipDto.sportId);
        if (championshipExists)
            throw new bad_request_exception_1.BadRequestException('Torneio com este nome já existe', 400);
        const championship = this.championshipRepository.create(createChampionshipDto);
        return this.championshipRepository.save(championship);
    }
};
exports.ChampionshipCreateService = ChampionshipCreateService;
exports.ChampionshipCreateService = ChampionshipCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(championship_entity_1.Championship)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_championship_service_1.ChampionshipFindService,
        find_sport_service_1.SportFindService])
], ChampionshipCreateService);
//# sourceMappingURL=create-championship.service.js.map