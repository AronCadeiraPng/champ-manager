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
exports.ChampionshipsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const championship_entity_1 = require("./entities/championship.entity");
const typeorm_2 = require("typeorm");
const bad_request_exception_1 = require("../common/exceptions/bad-request.exception");
let ChampionshipsService = class ChampionshipsService {
    championshipsRepository;
    constructor(championshipsRepository) {
        this.championshipsRepository = championshipsRepository;
    }
    async createChampionship(createChampionshipDto) {
        const championship = this.championshipsRepository.create(createChampionshipDto);
        const championshipExists = await this.findChampionshipByName(createChampionshipDto.name);
        if (championshipExists)
            throw new bad_request_exception_1.BadRequestException('Torneio com este nome já existe', 400);
        return this.championshipsRepository.save(championship);
    }
    async updateChampionship(id, updateChampionshipDto) {
        const championship = await this.findChampionshipById(id);
        Object.assign(championship, updateChampionshipDto);
        return this.championshipsRepository.save(championship);
    }
    async deleteChampionship(id) {
        const championship = await this.findChampionshipById(id);
        if (!championship)
            throw new common_1.NotFoundException('Torneio', id);
        return this.championshipsRepository.remove(championship);
    }
    async findAllChampionships() {
        return await this.championshipsRepository.find();
    }
    async findChampionshipByName(name) {
        return await this.championshipsRepository.findOneBy({ name });
    }
    async findChampionshipById(id) {
        const championship = await this.championshipsRepository.findOneBy({ id });
        if (!championship)
            throw new common_1.NotFoundException('Torneio não encontrado', id);
        return championship;
    }
};
exports.ChampionshipsService = ChampionshipsService;
exports.ChampionshipsService = ChampionshipsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(championship_entity_1.Championship)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChampionshipsService);
//# sourceMappingURL=championships.service.js.map