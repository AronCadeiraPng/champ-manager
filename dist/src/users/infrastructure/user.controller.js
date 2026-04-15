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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const register_user_dto_1 = require("../models/dtos/register-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../models/entity/user.entity");
const common_2 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const user_roles_enum_1 = require("../../common/enums/user-roles.enum");
const user_register_service_1 = require("../use-cases/register-user/user-register.service");
const find_user_service_1 = require("../use-cases/find-user/find-user.service");
const roles_guard_1 = require("../../common/guards/roles.guard");
let UserController = class UserController {
    userFindService;
    userRegisterService;
    constructor(userFindService, userRegisterService) {
        this.userFindService = userFindService;
        this.userRegisterService = userRegisterService;
    }
    async create(registerUserDto) {
        return await this.userRegisterService.registerUser(registerUserDto);
    }
    async findAllUsers() {
        return await this.userFindService.findAllUsers();
    }
    async findUserById(id) {
        return await this.userFindService.findUserById(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Registra um novo usuário' }),
    (0, swagger_1.ApiBody)({ type: register_user_dto_1.RegisterUserDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuário criado com sucesso!',
        type: user_entity_1.User
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os usuários' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna um usuário pelo id' }),
    __param(0, (0, common_1.Param)('id', common_2.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUserById", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [find_user_service_1.UserFindService,
        user_register_service_1.UserRegisterService])
], UserController);
//# sourceMappingURL=user.controller.js.map