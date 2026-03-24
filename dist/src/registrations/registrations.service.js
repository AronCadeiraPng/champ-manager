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
const exceptions_1 = require("../common/exceptions");
const championships_service_1 = require("../championships/championships.service");
const user_service_1 = require("../users/user.service");
const bad_request_exception_1 = require("../common/exceptions/bad-request.exception");
let RegistrationsService = class RegistrationsService {
    registrationsRepository;
    userService;
    championshipsService;
    constructor(registrationsRepository, userService, championshipsService) {
        this.registrationsRepository = registrationsRepository;
        this.userService = userService;
        this.championshipsService = championshipsService;
    }
    async register(createRegistrationDto, userIdDto) {
        const user = await this.userService.findUserById(userIdDto);
        const championship = await this.championshipsService.findChampionshipById(createRegistrationDto.championshipId);
        const alreadyRegistered = await this.registrationsRepository.findOne({
            where: {
                userId: userIdDto,
            }
        });
        if (alreadyRegistered)
            throw new bad_request_exception_1.BadRequestException('Registro já feito', 400);
        const nowDate = new Date();
        if (user.gender !== championship.gender)
            throw new bad_request_exception_1.BadRequestException('Gênero não correspondente ao do torneio', 400);
        if (championship.registrationEnd < nowDate)
            throw new bad_request_exception_1.BadRequestException('Período de inscrição encerrado', 400);
        if (!championship)
            throw new exceptions_1.NotFoundException('Torneio', createRegistrationDto.championshipId);
        const registration = this.registrationsRepository.create({
            userName: user.name,
            userId: userIdDto,
            championshipName: championship.name,
            championshipId: createRegistrationDto.championshipId
        });
        return this.registrationsRepository.save(registration);
    }
    async allRegisters() {
        return await this.registrationsRepository.find();
    }
    async findRegisterById(id) {
        const registration = await this.registrationsRepository.findOneBy({ id });
        if (!registration)
            throw new exceptions_1.NotFoundException('Registro', id);
        return registration;
    }
    async deleteRegistration(id) {
        const registration = await this.findRegisterById(id);
        return this.registrationsRepository.remove(registration);
    }
};
exports.RegistrationsService = RegistrationsService;
exports.RegistrationsService = RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.Registration)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        championships_service_1.ChampionshipsService])
], RegistrationsService);
//# sourceMappingURL=registrations.service.js.map