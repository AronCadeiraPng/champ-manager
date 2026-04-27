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
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../../common/guards/roles.guard");
const create_championship_dto_1 = require("../models/dtos/create-championship.dto");
const update_championship_dto_1 = require("../models/dtos/update-championship.dto");
const championship_entity_1 = require("../models/entity/championship.entity");
const create_championship_service_1 = require("../use-cases/create-championship/create-championship.service");
const delete_championship_solo_service_1 = require("../use-cases/delete-championship/delete-championship-solo.service");
const find_championship_service_1 = require("../use-cases/find-championship/find-championship.service");
const find_registrations_service_1 = require("../use-cases/find-registrations/find-registrations.service");
const start_championship_service_1 = require("../use-cases/start-championship/start-championship.service");
const update_championship_service_1 = require("../use-cases/update-championship/update-championship.service");
const user_roles_enum_1 = require("../../common/enums/user-roles.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const registrations_team_list_dto_1 = require("../../registrations-team/models/dtos/registrations-team-list.dto");
const registrations_solo_list_dto_1 = require("../../registrations-solo/models/dtos/registrations-solo-list.dto");
let ChampionshipsController = class ChampionshipsController {
    championshipCreateService;
    championshipFindService;
    championshipDeleteService;
    championshipUpdateService;
    championshipStartService;
    championshipRegistrationsFindService;
    constructor(championshipCreateService, championshipFindService, championshipDeleteService, championshipUpdateService, championshipStartService, championshipRegistrationsFindService) {
        this.championshipCreateService = championshipCreateService;
        this.championshipFindService = championshipFindService;
        this.championshipDeleteService = championshipDeleteService;
        this.championshipUpdateService = championshipUpdateService;
        this.championshipStartService = championshipStartService;
        this.championshipRegistrationsFindService = championshipRegistrationsFindService;
    }
    ;
    async createChampionship(createChampionshipDto) {
        return await this.championshipCreateService.createChampionship(createChampionshipDto);
    }
    async getAllChampionships() {
        return this.championshipFindService.findAllChampionships();
    }
    async findChampionshipById(id) {
        return this.championshipFindService.findChampionshipById(id);
    }
    async getAllRegistrationsByChampionship(championshipId) {
        return this.championshipRegistrationsFindService.findRegistrations(championshipId);
    }
    async deleteChampionship(id) {
        return this.championshipDeleteService.deleteChampionship(id);
    }
    async updateChampionship(id, updateChampionshipDto) {
        return this.championshipUpdateService.updateChampionship(id, updateChampionshipDto);
    }
    async convertRegistrations(championshipId) {
        return this.championshipStartService.start(championshipId);
    }
};
exports.ChampionshipsController = ChampionshipsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo torneio', description: 'Apenas administradores podem criar torneios' }),
    (0, swagger_1.ApiBody)({ type: create_championship_dto_1.CreateChampionshipDto }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Torneio criado com sucesso', type: championship_entity_1.Championship }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Dados inválidos' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Token inválido ou ausente' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Sem permissão para criar torneios' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_championship_dto_1.CreateChampionshipDto]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "createChampionship", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todos os torneios' }),
    (0, swagger_1.ApiOkResponse)({ type: create_championship_dto_1.CreateChampionshipDto }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Nenhum torneio encontrado' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permissão negada' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "getAllChampionships", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Busca um torneio pelo id' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID do torneio', format: 'uuid' }),
    (0, swagger_1.ApiOkResponse)({ type: () => create_championship_dto_1.CreateChampionshipDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Torneio não encontrando' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permissão negada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "findChampionshipById", null);
__decorate([
    (0, common_1.Get)(':id/registrations'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Lista as inscrições de um torneio', description: 'Pode listar tanto inscrições individuais quanto de times' }),
    (0, swagger_1.ApiOkResponse)({ type: registrations_solo_list_dto_1.RegistrationSoloListDto || registrations_team_list_dto_1.RegistrationTeamListDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Torneio não encontrando' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permissão negada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "getAllRegistrationsByChampionship", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Deleta um torneio por id', description: 'Apenas administradores podem deletar torneios' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Torneio deletado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Torneio não encontrando' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permissão negada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "deleteChampionship", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza um torneio pelo id' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Torneio não encontrando' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permissão negada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_championship_dto_1.UpdateChampionshipDto]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "updateChampionship", null);
__decorate([
    (0, common_1.Post)(':id/start'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Inicia um torneio pela fase de grupo' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Torneio não encontrando' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Permissão negada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChampionshipsController.prototype, "convertRegistrations", null);
exports.ChampionshipsController = ChampionshipsController = __decorate([
    (0, swagger_1.ApiTags)('Championships'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, common_1.Controller)('championships/'),
    __metadata("design:paramtypes", [create_championship_service_1.ChampionshipCreateService,
        find_championship_service_1.ChampionshipFindService,
        delete_championship_solo_service_1.ChampionshipDeleteService,
        update_championship_service_1.ChampionshipUpdateService,
        start_championship_service_1.ChampionshipStartService,
        find_registrations_service_1.ChampionshipFindRegistrationsService])
], ChampionshipsController);
//# sourceMappingURL=championships.controller.js.map