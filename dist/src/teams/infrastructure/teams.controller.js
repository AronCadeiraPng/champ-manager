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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const create_team_dto_1 = require("../models/dtos/create-team.dto");
const create_team_service_1 = require("../use-cases/create-team/create-team.service");
const find_team_service_1 = require("../use-cases/find-team/find-team.service");
const delete_team_service_1 = require("../use-cases/delete-team/delete-team.service");
const swagger_1 = require("@nestjs/swagger");
let TeamsController = class TeamsController {
    teamCreateService;
    teamFindService;
    teamDeleteService;
    constructor(teamCreateService, teamFindService, teamDeleteService) {
        this.teamCreateService = teamCreateService;
        this.teamFindService = teamFindService;
        this.teamDeleteService = teamDeleteService;
    }
    create(createTeamDto) {
        return this.teamCreateService.execute(createTeamDto);
    }
    async getAllTeams() {
        return await this.teamFindService.allTeams();
    }
    async deleteAllTeams() {
        return await this.teamDeleteService.allTeams();
    }
    async deleteTeamById(id) {
        return await this.teamDeleteService.byId(id);
    }
};
exports.TeamsController = TeamsController;
__decorate([
    (0, common_1.Post)('new'),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo time' }),
    (0, swagger_1.ApiOkResponse)({ type: create_team_dto_1.CreateTeamDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Credenciais incorretas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os times' }),
    (0, swagger_1.ApiOkResponse)({ type: create_team_dto_1.CreateTeamDto }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Nenhum time encontrado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getAllTeams", null);
__decorate([
    (0, common_1.Delete)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Deleta todos os times' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Times deletados com sucesso' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "deleteAllTeams", null);
__decorate([
    (0, common_1.Delete)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Deleta um time pelo id' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Time deletado com sucesso' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "deleteTeamById", null);
exports.TeamsController = TeamsController = __decorate([
    (0, common_1.Controller)('teams'),
    __metadata("design:paramtypes", [create_team_service_1.TeamCreateService,
        find_team_service_1.TeamFindService,
        delete_team_service_1.TeamDeleteService])
], TeamsController);
//# sourceMappingURL=teams.controller.js.map