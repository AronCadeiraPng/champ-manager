"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const user_module_1 = require("./users/infrastructure/user.module");
const data_source_1 = require("../source/data-source");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/models/entity/user.entity");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const sports_module_1 = require("./sports/infrastructure/sports.module");
const user_register_service_1 = require("./users/use-cases/register-user/user-register.service");
const registrations_module_1 = require("./registrations-solo/infrastructure/registrations.module");
const registration_team_entity_1 = require("./registrations-team/models/entity/registration-team.entity");
const teams_module_1 = require("./teams/infrastructure/teams.module");
const members_module_1 = require("./members/infrastructure/members.module");
const registrations_team_module_1 = require("./registrations-team/infrastructure/registrations-team.module");
const championship_entity_1 = require("./championships/models/entity/championship.entity");
const participant_module_1 = require("./participant/infrastructure/participant.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            data_source_1.DataModule,
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            auth_module_1.AuthModule,
            championship_entity_1.Championship,
            registrations_team_module_1.RegistrationsTeamModule,
            registrations_module_1.RegistrationSoloModule,
            sports_module_1.SportsModule,
            registration_team_entity_1.RegistrationTeam,
            teams_module_1.TeamsModule,
            members_module_1.MembersModule,
            participant_module_1.ParticipantModule
        ],
        controllers: [],
        providers: [
            app_service_1.AppService,
            user_register_service_1.UserRegisterService,
            user_entity_1.User
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map