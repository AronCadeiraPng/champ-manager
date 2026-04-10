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
exports.PlayerCreateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
const player_entity_1 = require("../../models/entity/player.entity");
const typeorm_2 = require("typeorm");
let PlayerCreateService = class PlayerCreateService {
    playersRepository;
    constructor(playersRepository) {
        this.playersRepository = playersRepository;
    }
    async create(createPlayerDto) {
        const playerExists = await this.playersRepository.findOne({
            where: {
                championshipId: createPlayerDto.championshipId,
                registrationId: createPlayerDto.registrationId
            }
        });
        if (playerExists)
            throw new bad_request_exception_1.BadRequestException('Jogador já registrado', 400);
        const player = this.playersRepository.create(createPlayerDto);
        return this.playersRepository.save(player);
    }
};
exports.PlayerCreateService = PlayerCreateService;
exports.PlayerCreateService = PlayerCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlayerCreateService);
//# sourceMappingURL=create-player.service.js.map