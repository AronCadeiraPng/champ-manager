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
exports.ChampionshipsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_roles_enum_1 = require("../../common/enums/user-roles.enum");
const roles_guard_1 = require("../../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const find_championship_solo_service_1 = require("../use-cases/find-championship/find-championship-solo.service");
const delete_championship_solo_service_1 = require("../use-cases/delete-championship/delete-championship-solo.service");
const create_championship_solo_service_1 = require("../use-cases/create-championship/create-championship-solo.service");
const update_championship_solo_service_1 = require("../use-cases/update-championship/update-championship-solo.service");
const championship_solo_entity_1 = require("../models/entity/championship-solo.entity");
const update_championship_solo_dto_1 = require("../models/dtos/update-championship-solo.dto");
const create_championship_solo_dto_1 = require("../models/dtos/create-championship-solo.dto");
let ChampionshipsController = class ChampionshipsController {
    championshipCreateService;
    championshipFindService;
    championshipDeleteService;
    championshipUpdateService;
    constructor(championshipCreateService, championshipFindService, championshipDeleteService, championshipUpdateService) {
        this.championshipCreateService = championshipCreateService;
        this.championshipFindService = championshipFindService;
        this.championshipDeleteService = championshipDeleteService;
        this.championshipUpdateService = championshipUpdateService;
    }
    ;
    async createChampionship(createChampionshipDto) {
        return await this.championshipCreateService.createChampionship(createChampionshipDto);
    }
    async getAllChampionships() {
        return this.championshipFindService.findAllChampionshipsSolo();
    }
    async deleteChampionship(id) {
        return this.championshipDeleteService.deleteChampionship(id);
    }
    async updateChampionship(id, updateChampionshipDto) {
        return this.championshipUpdateService.updateChampionship(id, updateChampionshipDto);
    }
    async findChampionshipById(id) {
        return this.championshipFindService.findChampionshipSoloById(id);
    }
};
exports.ChampionshipsController = ChampionshipsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN),
    (0, swagger_1.ApiOperation)({
        summary: 'Cria um novo torneio',
        description: 'Apenas administradores podem criar torneios',
    }),
    (0, swagger_1.ApiBody)({ type: create_championship_solo_dto_1.CreateChampionshipSoloDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Torneio criado com sucesso', type: championship_solo_entity_1.ChampionshipSolo }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Dados inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Token inválido ou ausente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sem permissão para criar torneios' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_championship_solo_dto_1.CreateChampionshipSoloDto]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "createChampionship", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todos os torneios' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de torneios',
        type: [championship_solo_entity_1.ChampionshipSolo]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "getAllChampionships", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Deleta um torneio por id',
        description: 'Apenas administradores podem deletar torneios',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "deleteChampionship", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza um torneio pelo id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Torneio atualizado!'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_championship_solo_dto_1.UpdateChampionshipSoloDto]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "updateChampionship", null);
__decorate([
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca um torneio pelo id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID do torneio', format: 'uuid' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Torneio encontrado',
        type: championship_solo_entity_1.ChampionshipSolo
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "findChampionshipById", null);
exports.ChampionshipsController = ChampionshipsController = __decorate([
    (0, swagger_1.ApiTags)('Championships'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('championships/solo'),
    __metadata("design:paramtypes", [create_championship_solo_service_1.ChampionshipSoloCreateService,
        find_championship_solo_service_1.ChampionshipSoloFindService,
        delete_championship_solo_service_1.ChampionshipSoloDeleteService,
        update_championship_solo_service_1.ChampionshipSoloUpdateService])
], ChampionshipsController);
//# sourceMappingURL=championships-solo.controller.js.map