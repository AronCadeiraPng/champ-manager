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
exports.RegistrationSoloFindService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exceptions_1 = require("../../../common/exceptions");
const registration_entity_1 = require("../../models/entity/registration.entity");
const typeorm_2 = require("typeorm");
let RegistrationSoloFindService = class RegistrationSoloFindService {
    registrationsRepository;
    constructor(registrationsRepository) {
        this.registrationsRepository = registrationsRepository;
    }
    async allRegisters() {
        return await this.registrationsRepository.find({});
    }
    async findRegisterById(id) {
        const registration = await this.registrationsRepository.findOneBy({ id });
        if (!registration)
            throw new exceptions_1.NotFoundException('Registro', id);
        return registration;
    }
};
exports.RegistrationSoloFindService = RegistrationSoloFindService;
exports.RegistrationSoloFindService = RegistrationSoloFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.RegistrationSolo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistrationSoloFindService);
//# sourceMappingURL=find-registration.service.js.map