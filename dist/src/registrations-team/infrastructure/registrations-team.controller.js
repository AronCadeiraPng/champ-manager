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
exports.RegistrationsTeamController = void 0;
const common_1 = require("@nestjs/common");
const create_registration_team_service_1 = require("../use-cases/create-registration/create-registration-team.service");
const create_team_dto_1 = require("../../teams/models/dtos/create-team.dto");
let RegistrationsTeamController = class RegistrationsTeamController {
    registrationCreateService;
    constructor(registrationCreateService) {
        this.registrationCreateService = registrationCreateService;
    }
    async createRegistration(championshipId, createTeamDto) {
        return await this.registrationCreateService.create(championshipId, createTeamDto);
    }
};
exports.RegistrationsTeamController = RegistrationsTeamController;
__decorate([
    (0, common_1.Post)('new/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], RegistrationsTeamController.prototype, "createRegistration", null);
exports.RegistrationsTeamController = RegistrationsTeamController = __decorate([
    (0, common_1.Controller)('registrations/team'),
    __metadata("design:paramtypes", [create_registration_team_service_1.RegistrationsTeamCreateService])
], RegistrationsTeamController);
//# sourceMappingURL=registrations-team.controller.js.map