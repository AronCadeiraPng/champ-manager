"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataConfig = void 0;
const dotenv_1 = require("dotenv");
const user_entity_1 = require("../src/users/models/entity/user.entity");
const championship_entity_1 = require("../src/championships/models/entity/championship.entity");
const match_entity_1 = require("../src/matches/models/entity/match.entity");
const member_entity_1 = require("../src/members/models/entity/member.entity");
const participant_entity_1 = require("../src/participant/models/entity/participant.entity");
const phase_entity_1 = require("../src/phases/entity/phase.entity");
const player_entity_1 = require("../src/players/models/entity/player.entity");
const registration_entity_1 = require("../src/registrations-solo/models/entity/registration.entity");
const registration_team_entity_1 = require("../src/registrations-team/models/entity/registration-team.entity");
const sport_entity_1 = require("../src/sports/models/entity/sport.entity");
const team_entity_1 = require("../src/teams/models/entity/team.entity");
(0, dotenv_1.config)();
exports.DataConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        user_entity_1.User,
        registration_entity_1.RegistrationSolo,
        registration_team_entity_1.RegistrationTeam,
        championship_entity_1.Championship,
        sport_entity_1.Sport,
        team_entity_1.Team,
        member_entity_1.Member,
        participant_entity_1.Participant,
        match_entity_1.Match,
        phase_entity_1.Phase,
        player_entity_1.Player
    ],
    synchronize: true,
};
//# sourceMappingURL=data.config.js.map