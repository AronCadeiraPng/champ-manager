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
exports.ChampionshipFindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const championship_entity_1 = require("../../models/entity/championship.entity");
const exceptions_1 = require("../../../common/exceptions");
const typeorm_2 = require("typeorm");
let ChampionshipFindService = class ChampionshipFindService {
    championshipRepository;
    constructor(championshipRepository) {
        this.championshipRepository = championshipRepository;
    }
    async findAllChampionships() {
        return await this.championshipRepository.find();
    }
    async findChampionshipByName(name) {
        return await this.championshipRepository.findOneBy({ name });
    }
    async findChampionshipById(id) {
        const championship = await this.championshipRepository.findOneBy({ id });
        if (!championship)
            throw new exceptions_1.NotFoundException('Torneio', id);
        return championship;
    }
};
exports.ChampionshipFindService = ChampionshipFindService;
exports.ChampionshipFindService = ChampionshipFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(championship_entity_1.Championship)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChampionshipFindService);
//# sourceMappingURL=find-championship.service.js.map