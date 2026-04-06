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
exports.SportUpdateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sport_entity_1 = require("../../models/entity/sport.entity");
const typeorm_2 = require("typeorm");
const find_sport_service_1 = require("../find-sport/find-sport.service");
let SportUpdateService = class SportUpdateService {
    sportRepository;
    sportFindService;
    constructor(sportRepository, sportFindService) {
        this.sportRepository = sportRepository;
        this.sportFindService = sportFindService;
    }
    async update(id, updateSportDto) {
        const sport = await this.sportFindService.findSportById(id);
        Object.assign(sport, updateSportDto);
        return this.sportRepository.save(sport);
    }
};
exports.SportUpdateService = SportUpdateService;
exports.SportUpdateService = SportUpdateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sport_entity_1.Sport)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_sport_service_1.SportFindService])
], SportUpdateService);
//# sourceMappingURL=update-sport.service.js.map