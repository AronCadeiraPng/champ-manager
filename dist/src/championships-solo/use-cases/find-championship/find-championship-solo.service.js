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
exports.ChampionshipSoloFindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const championship_solo_entity_1 = require("../../models/entity/championship-solo.entity");
const exceptions_1 = require("../../../common/exceptions");
const typeorm_2 = require("typeorm");
let ChampionshipSoloFindService = class ChampionshipSoloFindService {
    championshipSoloRepository;
    constructor(championshipSoloRepository) {
        this.championshipSoloRepository = championshipSoloRepository;
    }
    async findAllChampionshipsSolo() {
        return await this.championshipSoloRepository.find();
    }
    async findChampionshipSoloByName(name) {
        return await this.championshipSoloRepository.findOneBy({ name });
    }
    async findChampionshipSoloById(id) {
        const championship = await this.championshipSoloRepository.findOneBy({ id });
        if (!championship)
            throw new exceptions_1.NotFoundException('Torneio', id);
        return championship;
    }
};
exports.ChampionshipSoloFindService = ChampionshipSoloFindService;
exports.ChampionshipSoloFindService = ChampionshipSoloFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(championship_solo_entity_1.ChampionshipSolo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChampionshipSoloFindService);
//# sourceMappingURL=find-championship-solo.service.js.map