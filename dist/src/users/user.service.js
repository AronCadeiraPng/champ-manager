"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = __importStar(require("bcrypt"));
const exceptions_1 = require("../common/exceptions");
const roles_decorator_1 = require("../decorators/roles.decorator");
const user_roles_enum_1 = require("../common/enums/user-roles.enum");
const bad_request_exception_1 = require("../common/exceptions/bad-request.exception");
const INVALID_CREDENTIALS = 'Credenciais inválidas';
let UserService = class UserService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async registerUser(registerUserDto) {
        const emailExists = await this.findUserByEmail(registerUserDto.email);
        const CpfExists = await this.findUserByCpf(registerUserDto.cpf);
        if (emailExists)
            throw new bad_request_exception_1.BadRequestException('Usuário com este email já existe!', 400);
        if (CpfExists)
            throw new bad_request_exception_1.BadRequestException('Usuário com este cpf já cadastrado!', 400);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);
        const user = this.usersRepository.create({
            ...registerUserDto,
            password: hashedPassword,
        });
        return this.usersRepository.save(user);
    }
    async loginIn(loginUser) {
        const user = await this.usersRepository.findOne({
            where: [
                { email: loginUser.account },
                { cpf: loginUser.account },
            ],
        });
        if (!user) {
            throw new exceptions_1.NotFoundException(INVALID_CREDENTIALS);
        }
        const isPasswordValid = await (0, bcrypt_1.compare)(loginUser.password, user.password);
        if (!isPasswordValid) {
            throw new bad_request_exception_1.BadRequestException(INVALID_CREDENTIALS, 400);
        }
        return user;
    }
    async findAllUsers() {
        return await this.usersRepository.find({
            select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
        });
    }
    async findUserById(id) {
        const user = await this.usersRepository.findOne({
            where: { id: id },
            select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
        });
        if (!user) {
            throw new exceptions_1.NotFoundException(`Usuário: ${id}`);
        }
        ;
        return user;
    }
    async findUserByEmail(email) {
        return await this.usersRepository.findOne({
            where: { email: email },
            select: ['id', 'password', 'gender', 'name', 'email', 'createdAt', 'role']
        });
    }
    async findUserByCpf(cpf) {
        return await this.usersRepository.findOne({
            where: { cpf: cpf },
            select: ['id', 'gender', 'name', 'email', 'createdAt', 'role']
        });
    }
};
exports.UserService = UserService;
__decorate([
    (0, roles_decorator_1.Roles)(user_roles_enum_1.UserRoles.ADMIN, user_roles_enum_1.UserRoles.MANAGER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserService.prototype, "findAllUsers", null);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map