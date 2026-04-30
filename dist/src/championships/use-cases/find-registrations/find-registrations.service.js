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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionshipFindRegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const find_registration_service_1 = require("../../../registrations-solo/use-cases/find-registration/find-registration.service");
const find_registration_service_2 = require("../../../registrations-team/use-cases/find-registration/find-registration.service");
const find_championship_service_1 = require("../find-championship/find-championship.service");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
const modality_enum_1 = require("../../../common/enums/modality.enum");
let ChampionshipFindRegistrationsService = class ChampionshipFindRegistrationsService {
    championshipFindService;
    registrationSoloFindService;
    registrationTeamFindService;
    constructor(championshipFindService, registrationSoloFindService, registrationTeamFindService) {
        this.championshipFindService = championshipFindService;
        this.registrationSoloFindService = registrationSoloFindService;
        this.registrationTeamFindService = registrationTeamFindService;
    }
    async findRegistrations(championshipId) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId);
        if (championship.modality == modality_enum_1.ModalityEnum.SOLO) {
            const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
            if (registrations.length < 1)
                throw new bad_request_exception_1.BadRequestException('Nenhum registro encontrado.', 204);
            return registrations;
        }
        if (championship.modality == modality_enum_1.ModalityEnum.TEAM) {
            const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
            if (registrations.length < 1)
                throw new bad_request_exception_1.BadRequestException('Nenhum registro encontrado.', 204);
            return registrations;
        }
    }
};
exports.ChampionshipFindRegistrationsService = ChampionshipFindRegistrationsService;
exports.ChampionshipFindRegistrationsService = ChampionshipFindRegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [find_championship_service_1.ChampionshipFindService,
        find_registration_service_1.RegistrationSoloFindService,
        find_registration_service_2.RegistrationTeamFindService])
], ChampionshipFindRegistrationsService);
//# sourceMappingURL=find-registrations.service.js.map