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
exports.SportsController = void 0;
const common_1 = require("@nestjs/common");
const create_sport_dto_1 = require("../models/dtos/create-sport.dto");
const create_sport_service_1 = require("../use-cases/create-sport/create-sport.service");
const find_sport_service_1 = require("../use-cases/find-sport/find-sport.service");
const update_sport_dto_1 = require("../models/dtos/update-sport.dto");
const update_sport_service_1 = require("../use-cases/update-sport/update-sport.service");
const delete_sport_service_1 = require("../use-cases/delete-sport/delete-sport.service");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../users/models/entity/user.entity");
let SportsController = class SportsController {
    sportCreateService;
    sportFindService;
    sportDeleteService;
    sportUpdateService;
    constructor(sportCreateService, sportFindService, sportDeleteService, sportUpdateService) {
        this.sportCreateService = sportCreateService;
        this.sportFindService = sportFindService;
        this.sportDeleteService = sportDeleteService;
        this.sportUpdateService = sportUpdateService;
    }
    async create(createSportDto) {
        return this.sportCreateService.create(createSportDto);
    }
    async getAll() {
        return this.sportFindService.findAllSport();
    }
    async findById(id) {
        return this.sportFindService.findSportById(id);
    }
    async update(id, updateSportDto) {
        return this.sportUpdateService.update(id, updateSportDto);
    }
    async deleteById(id) {
        return this.sportDeleteService.delete(id);
    }
};
exports.SportsController = SportsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo esporte' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: user_entity_1.User
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sport_dto_1.CreateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os esportes' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: user_entity_1.User
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retorna um esporte pelo id' }),
    (0, swagger_1.ApiBody)({ type: create_sport_dto_1.CreateSportDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: user_entity_1.User
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza um esporte pelo id' }),
    (0, swagger_1.ApiBody)({ type: create_sport_dto_1.CreateSportDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: user_entity_1.User
    }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sport_dto_1.UpdateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Deleta um esporte pelo id',
        description: 'O esporte não é realmente deletado, apenas recebe true ao atributo Deleted'
    }),
    (0, swagger_1.ApiBody)({ type: create_sport_dto_1.CreateSportDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: user_entity_1.User
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "deleteById", null);
exports.SportsController = SportsController = __decorate([
    (0, common_1.Controller)('sports'),
    __metadata("design:paramtypes", [create_sport_service_1.SportCreateService,
        find_sport_service_1.SportFindService,
        delete_sport_service_1.SportDeleteService,
        update_sport_service_1.SportUpdateService])
], SportsController);
//# sourceMappingURL=sports.controller.js.map