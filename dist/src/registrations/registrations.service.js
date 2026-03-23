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
exports.RegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const registration_entity_1 = require("./entities/registration.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RegistrationsService = class RegistrationsService {
    registrationsRepository;
    constructor(registrationsRepository) {
        this.registrationsRepository = registrationsRepository;
    }
    async register(createRegistrationDto, userId) {
        const alreadyRegistered = await this.registrationsRepository.findOne({
            where: { userId, championshipId: createRegistrationDto.championshipId }
        });
        if (alreadyRegistered)
            throw new common_1.BadRequestException('Registro já feito');
        const registration = this.registrationsRepository.create({
            userId,
            championshipId: createRegistrationDto.championshipId
        });
        return this.registrationsRepository.save(registration);
    }
    async allRegisters() {
        return await this.registrationsRepository.find();
    }
    async findRegisterById(id) {
        return await this.registrationsRepository.findOneBy({ id });
    }
};
exports.RegistrationsService = RegistrationsService;
exports.RegistrationsService = RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.Registration)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistrationsService);
//# sourceMappingURL=registrations.service.js.map