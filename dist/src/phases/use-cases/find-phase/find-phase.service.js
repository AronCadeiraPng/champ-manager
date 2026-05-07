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
exports.PhaseFindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exceptions_1 = require("../../../common/exceptions");
const phase_entity_1 = require("../../entity/phase.entity");
const typeorm_2 = require("typeorm");
let PhaseFindService = class PhaseFindService {
    phaseRepository;
    async ById(id) {
        const phase = await this.phaseRepository.findOne({
            where: {
                id: id
            }
        });
        if (!phase)
            throw new exceptions_1.NotFoundException('Fase', id);
        return phase;
    }
    async ByChampionship(championshipId) {
        return await this.phaseRepository.find({
            where: {
                championshipId: championshipId
            }
        });
    }
};
exports.PhaseFindService = PhaseFindService;
__decorate([
    (0, typeorm_1.InjectRepository)(phase_entity_1.Phase),
    __metadata("design:type", typeorm_2.Repository)
], PhaseFindService.prototype, "phaseRepository", void 0);
exports.PhaseFindService = PhaseFindService = __decorate([
    (0, common_1.Injectable)()
], PhaseFindService);
//# sourceMappingURL=find-phase.service.js.map