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
exports.PlayersController = void 0;
const common_1 = require("@nestjs/common");
const create_player_dto_1 = require("../models/dtos/create-player.dto");
const create_player_service_1 = require("../use-cases/create-player/create-player.service");
const find_player_service_1 = require("../use-cases/find-player/find-player.service");
const delete_player_service_1 = require("../use-cases/delete-player/delete-player.service");
let PlayersController = class PlayersController {
    playerCreateService;
    playerFindService;
    playerDeleteService;
    constructor(playerCreateService, playerFindService, playerDeleteService) {
        this.playerCreateService = playerCreateService;
        this.playerFindService = playerFindService;
        this.playerDeleteService = playerDeleteService;
    }
    async create(createPlayerDto) {
        return this.playerCreateService.create(createPlayerDto);
    }
    async getAll() {
        return this.playerFindService.findAllPlayers();
    }
    async deletePlayer(id) {
        return this.playerDeleteService.delete(id);
    }
};
exports.PlayersController = PlayersController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PlayersController.prototype, "deletePlayer", null);
exports.PlayersController = PlayersController = __decorate([
    (0, common_1.Controller)('players'),
    __metadata("design:paramtypes", [create_player_service_1.PlayerCreateService,
        find_player_service_1.PlayerFindService,
        delete_player_service_1.PlayerDeleteService])
], PlayersController);
//# sourceMappingURL=players.controller.js.map