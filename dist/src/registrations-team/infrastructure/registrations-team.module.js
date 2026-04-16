"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationsTeamModule = void 0;
const common_1 = require("@nestjs/common");
const registrations_team_controller_1 = require("./registrations-team.controller");
const typeorm_1 = require("@nestjs/typeorm");
const registration_team_entity_1 = require("../models/entity/registration-team.entity");
const find_registration_service_1 = require("../use-cases/find-registration/find-registration.service");
const create_registration_team_service_1 = require("../use-cases/create-registration/create-registration-team.service");
const create_team_service_1 = require("../../teams/use-cases/create-team/create-team.service");
const team_entity_1 = require("../../teams/models/entity/team.entity");
const teams_module_1 = require("../../teams/infrastructure/teams.module");
const create_member_service_1 = require("../../members/use-cases/create-member/create-member.service");
const find_member_service_1 = require("../../members/use-cases/find-member/find-member.service");
const member_entity_1 = require("../../members/models/entity/member.entity");
const members_module_1 = require("../../members/infrastructure/members.module");
const championship_entity_1 = require("../../championships/models/entity/championship.entity");
const find_championship_service_1 = require("../../championships/use-cases/find-championship/find-championship.service");
const find_user_service_1 = require("../../users/use-cases/find-user/find-user.service");
const user_entity_1 = require("../../users/models/entity/user.entity");
const find_team_service_1 = require("../../teams/use-cases/find-team/find-team.service");
const update_team_service_1 = require("../../teams/use-cases/update-team/update-team.service");
const delete_registration_service_1 = require("../use-cases/delete-registration/delete-registration.service");
let RegistrationsTeamModule = class RegistrationsTeamModule {
};
exports.RegistrationsTeamModule = RegistrationsTeamModule;
exports.RegistrationsTeamModule = RegistrationsTeamModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([registration_team_entity_1.RegistrationTeam, team_entity_1.Team, member_entity_1.Member, championship_entity_1.Championship, user_entity_1.User]), members_module_1.MembersModule, teams_module_1.TeamsModule],
        controllers: [registrations_team_controller_1.RegistrationsTeamController],
        providers: [
            find_championship_service_1.ChampionshipFindService,
            create_team_service_1.TeamCreateService,
            find_registration_service_1.RegistrationTeamFindService,
            create_registration_team_service_1.RegistrationsTeamCreateService,
            delete_registration_service_1.RegistrationTeamDeleteService,
            create_member_service_1.MemberCreateService,
            find_member_service_1.MemberFindService,
            create_team_service_1.TeamCreateService,
            find_team_service_1.TeamFindService,
            update_team_service_1.TeamUpdateService,
            find_user_service_1.UserFindService
        ],
        exports: [
            RegistrationsTeamModule,
            find_registration_service_1.RegistrationTeamFindService,
            create_registration_team_service_1.RegistrationsTeamCreateService
        ]
    })
], RegistrationsTeamModule);
//# sourceMappingURL=registrations-team.module.js.map