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
exports.PlayerFindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exceptions_1 = require("../../../common/exceptions");
const find_phase_service_1 = require("../../../phases/use-cases/find-phase/find-phase.service");
const player_entity_1 = require("../../models/entity/player.entity");
const typeorm_2 = require("typeorm");
let PlayerFindService = class PlayerFindService {
    playerRepository;
    phaseFindService;
    constructor(playerRepository, phaseFindService) {
        this.playerRepository = playerRepository;
        this.phaseFindService = phaseFindService;
    }
    async byId(id) {
        const player = await this.playerRepository.findOne({
            where: {
                id: id
            }
        });
        if (!player)
            throw new exceptions_1.NotFoundException('Jogador', id);
        return player;
    }
    async All() {
        const players = await this.playerRepository.find();
        return players;
    }
    async ByPhase(phaseId) {
        return await this.playerRepository.find({
            where: {
                match: {
                    phaseId: phaseId
                }
            }
        });
    }
};
exports.PlayerFindService = PlayerFindService;
exports.PlayerFindService = PlayerFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_phase_service_1.PhaseFindService])
], PlayerFindService);
//# sourceMappingURL=find-player.service.js.map