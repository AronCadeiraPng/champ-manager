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
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_roles_enum_1 = require("../../common/enums/user-roles.enum");
const swagger_1 = require("@nestjs/swagger");
const create_registration_dto_1 = require("../models/dtos/create-registration.dto");
const find_registration_service_1 = require("../use-cases/find-registration/find-registration.service");
const create_registration_service_1 = require("../use-cases/create-registration/create-registration.service");
const delete_registration_service_1 = require("../use-cases/delete-registration/delete-registration.service");
const registration_entity_1 = require("../models/entity/registration.entity");
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
    async delete(id) {
        return await this.registrationDeleteService.deleteRegistrationSolo(id);
    }
    async getAllRegistrations() {
        return await this.registrationFindService.allRegisters();
    }
    async getRegistrationById(id) {
        return await this.registrationFindService.findRegisterById(id);
    }
};
exports.RegistrationsSoloController = RegistrationsSoloController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registration_dto_1.CreateRegistrationSoloDto]),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Deletar um registro' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Registro deletado com sucesso',
        type: registration_entity_1.RegistrationSolo,
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os registros' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: registration_entity_1.RegistrationSolo }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "getAllRegistrations", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna um registro por id' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: registration_entity_1.RegistrationSolo }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrationsSoloController.prototype, "getRegistrationById", null);
exports.RegistrationsSoloController = RegistrationsSoloController = __decorate([
    (0, common_1.Controller)('registrations/solo'),
    __metadata("design:paramtypes", [find_registration_service_1.RegistrationSoloFindService,
        create_registration_service_1.RegistrationSoloCreateService,
        delete_registration_service_1.RegistrationSoloDeleteService])
], RegistrationsSoloController);
//# sourceMappingURL=registrations.controller.js.map