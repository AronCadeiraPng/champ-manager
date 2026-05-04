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
exports.ChampionshipStartService = void 0;
const common_1 = require("@nestjs/common");
const create_participant_service_1 = require("../../../participant/use-cases/create-participant/create-participant.service");
const find_registration_service_1 = require("../../../registrations-solo/use-cases/find-registration/find-registration.service");
const find_championship_service_1 = require("../find-championship/find-championship.service");
const find_registration_service_2 = require("../../../registrations-team/use-cases/find-registration/find-registration.service");
const modality_enum_1 = require("../../../common/enums/modality.enum");
let ChampionshipStartService = class ChampionshipStartService {
    participantCreateService;
    registrationSoloFindService;
    registrationTeamFindService;
    championshipFindService;
    constructor(participantCreateService, registrationSoloFindService, registrationTeamFindService, championshipFindService) {
        this.participantCreateService = participantCreateService;
        this.registrationSoloFindService = registrationSoloFindService;
        this.registrationTeamFindService = registrationTeamFindService;
        this.championshipFindService = championshipFindService;
    }
    async start(championshipId) {
        const championship = await this.championshipFindService.findChampionshipById(championshipId);
        const registrations = await this.registrationSoloFindService.findRegistrationsByChampionship(championshipId);
        if (championship.modality == modality_enum_1.ModalityEnum.SOLO) {
            const participants = await Promise.all(registrations.map(async (registration) => {
                const participantDto = {
                    registrationSolo: registration,
                    registrationUserId: registration.id,
                };
                const participant = await this.participantCreateService.createParticipant(championshipId, participantDto);
                return participant;
            }));
            return participants;
        }
        if (championship.modality == modality_enum_1.ModalityEnum.TEAM) {
            const registrations = await this.registrationTeamFindService.findRegistrationsByChampionship(championshipId);
            const participants = await Promise.all(registrations.map(async (registration) => {
                const participantDto = {
                    registrationTeamId: registration.id,
                };
                const participant = await this.participantCreateService.createParticipant(championshipId, participantDto);
                return participant;
            }));
            return participants;
        }
    }
};
exports.ChampionshipStartService = ChampionshipStartService;
exports.ChampionshipStartService = ChampionshipStartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [create_participant_service_1.ParticipantCreateService,
        find_registration_service_1.RegistrationSoloFindService,
        find_registration_service_2.RegistrationTeamFindService,
        find_championship_service_1.ChampionshipFindService])
], ChampionshipStartService);
//# sourceMappingURL=start-championship.service.js.map