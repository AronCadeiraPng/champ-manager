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
exports.RegistrationsTeamCreateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const find_championship_service_1 = require("../../../championships/use-cases/find-championship/find-championship.service");
const modality_enum_1 = require("../../../common/enums/modality.enum");
const exceptions_1 = require("../../../common/exceptions");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
const registration_team_entity_1 = require("../../models/entity/registration-team.entity");
const create_team_service_1 = require("../../../teams/use-cases/create-team/create-team.service");
const find_user_service_1 = require("../../../users/use-cases/find-user/find-user.service");
const typeorm_2 = require("typeorm");
let RegistrationsTeamCreateService = class RegistrationsTeamCreateService {
    registrationTeamRepository;
    teamCreateService;
    championshipFindService;
    userFindService;
    constructor(registrationTeamRepository, teamCreateService, championshipFindService, userFindService) {
        this.registrationTeamRepository = registrationTeamRepository;
        this.teamCreateService = teamCreateService;
        this.championshipFindService = championshipFindService;
        this.userFindService = userFindService;
    }
    async execute(championshipId, createTeamDto) {
        const members = createTeamDto.membersId;
        const championship = await this.championshipFindService.findChampionshipById(championshipId);
        if (championship.modality !== modality_enum_1.ModalityEnum.TEAM)
            throw new bad_request_exception_1.BadRequestException('Torneio apenas para times', 400);
        await Promise.all(members.map(async (memberId) => {
            this.userFindService.findUserById(memberId);
            const teamMemberExists = await this.registrationTeamRepository.findOne({
                where: {
                    team: {
                        members: {
                            userId: memberId
                        }
                    }
                }
            });
            if (teamMemberExists)
                throw new exceptions_1.ConflictException(`Usuário de id: ${memberId} já registrado em outro time!`);
        }));
        const team = await this.teamCreateService.execute(createTeamDto);
        const registration = new registration_team_entity_1.RegistrationTeam();
        registration.championship = championship;
        registration.team = team;
        const registrationSaved = await this.registrationTeamRepository.save(registration);
        return registrationSaved;
    }
};
exports.RegistrationsTeamCreateService = RegistrationsTeamCreateService;
exports.RegistrationsTeamCreateService = RegistrationsTeamCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_team_entity_1.RegistrationTeam)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        create_team_service_1.TeamCreateService,
        find_championship_service_1.ChampionshipFindService,
        find_user_service_1.UserFindService])
], RegistrationsTeamCreateService);
//# sourceMappingURL=create-registration-team.service.js.map