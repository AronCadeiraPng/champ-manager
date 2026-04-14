"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv_1 = require("dotenv");
const championship_entity_1 = require("../src/championships/models/entity/championship.entity");
const member_entity_1 = require("../src/members/models/entity/member.entity");
const participant_entity_1 = require("../src/participant/models/entity/participant.entity");
const player_entity_1 = require("../src/players/models/entity/player.entity");
const registration_entity_1 = require("../src/registrations-solo/models/entity/registration.entity");
const registration_team_entity_1 = require("../src/registrations-team/models/entity/registration-team.entity");
const sport_entity_1 = require("../src/sports/models/entity/sport.entity");
const team_entity_1 = require("../src/teams/models/entity/team.entity");
const user_entity_1 = require("../src/users/models/entity/user.entity");
(0, dotenv_1.config)();
let DataModule = class DataModule {
};
exports.DataModule = DataModule;
exports.DataModule = DataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [user_entity_1.User, registration_entity_1.RegistrationSolo, registration_team_entity_1.RegistrationTeam, championship_entity_1.Championship, sport_entity_1.Sport, player_entity_1.Player, team_entity_1.Team, member_entity_1.Member, participant_entity_1.Participant],
                synchronize: true,
            }),
        ],
    })
], DataModule);
//# sourceMappingURL=data-source.js.map