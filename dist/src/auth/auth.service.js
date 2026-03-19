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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../users/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const exceptions_1 = require("../common/exceptions");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AuthService = class AuthService {
    userService;
    jwtService;
    usersRepository;
    constructor(userService, jwtService, usersRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
    }
    async loginUser(email, password) {
        const user = await this.userService.findUserByEmail(email);
        if (!user) {
            throw new exceptions_1.NotFoundException('Usuário', email, 'email');
        }
        const isMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!isMatch) {
            throw new exceptions_1.ConflictException('Credenciais incorretas');
        }
        const payload = {
            sub: user.id,
            name: user.name,
            email: user.email,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async updateUser(id, updateUserDto, requesterId) {
        const user = await this.userService.findUserById(id);
        if (user.id !== requesterId)
            throw new exceptions_1.ConflictException('Usuário não corresponde');
        Object.assign(user, updateUserDto);
        return this.usersRepository.save(user);
    }
    async deleteUser(id, requesterId) {
        const user = await this.userService.findUserById(id);
        if (user.id !== requesterId)
            throw new exceptions_1.ConflictException('Erro ao deletar usuário');
        return this.usersRepository.remove(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        typeorm_1.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map