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
exports.RegistrationsSoloController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_roles_enum_1 = require("../../common/enums/user-roles.enum");
const swagger_1 = require("@nestjs/swagger");
const create_registration_dto_1 = require("../models/dtos/create-registration.dto");
const find_registration_service_1 = require("../use-cases/find-registration/find-registration.service");
const create_registration_service_1 = require("../use-cases/create-registration/create-registration.service");
const delete_registration_service_1 = require("../use-cases/delete-registration/delete-registration.service");
const passport_1 = require("@nestjs/passport");
const roles_guard_1 = require("../../common/guards/roles.guard");
const registrations_solo_list_dto_1 = require("../models/dtos/registrations-solo-list.dto");
let RegistrationsSoloController = class RegistrationsSoloController {
    registrationFindService;
    registrationCreateService;
    registrationDeleteService;
    constructor(registrationFindService, registrationCreateService, registrationDeleteService) {
        this.registrationFindService = registrationFindService;
        this.registrationCreateService = registrationCreateService;
        this.registrationDeleteService = registrationDeleteService;
    }
    async register(createRegistrationDto) {
        return await this.registrationCreateService.register(createRegistrationDto);
    }
    async getAllRegistrations() {
        return await this.registrationFindService.allRegisters();
    }
    async getRegistrationById(id) {
        return await this.registrationFindService.findRegisterById(id);
    }
    async delete(id) {
        return await this.registrationDeleteService.deleteRegistrationSolo(id);
    }
};
exports.RegistrationsSoloController = RegistrationsSoloController;
__decorate([
    (0, common_1.Post)('new'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo registro individual em um campeonato' }),
    (0, swagger_1.ApiOkResponse)({ type: () => create_registration_dto_1.CreateRegistrationSoloDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Credenciais inválidas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registration_dto_1.CreateRegistrationSoloDto]),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os registros' }),
    (0, swagger_1.ApiOkResponse)({ type: () => registrations_solo_list_dto_1.RegistrationSoloListDto }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Nenhum registro encontrado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "getAllRegistrations", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna um registro por id' }),
    (0, swagger_1.ApiOkResponse)({ type: () => registrations_solo_list_dto_1.RegistrationSoloListDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Registro não encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "getRegistrationById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar um registro' }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Registro deletado com sucesso' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Registro não encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "delete", null);
exports.RegistrationsSoloController = RegistrationsSoloController = __decorate([
    (0, swagger_1.ApiTags)('registrations-solo'),
    (0, common_1.Controller)('registrations/solo'),
    __metadata("design:paramtypes", [find_registration_service_1.RegistrationSoloFindService,
        create_registration_service_1.RegistrationSoloCreateService,
        delete_registration_service_1.RegistrationSoloDeleteService])
], RegistrationsSoloController);
//# sourceMappingURL=registrations.controller.js.map