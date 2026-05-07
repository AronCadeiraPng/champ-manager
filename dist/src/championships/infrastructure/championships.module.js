"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionshipModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const championship_entity_1 = require("../models/entity/championship.entity");
const championships_controller_1 = require("./championships.controller");
const delete_championship_solo_service_1 = require("../use-cases/delete-championship/delete-championship-solo.service");
const find_championship_service_1 = require("../use-cases/find-championship/find-championship.service");
const update_championship_service_1 = require("../use-cases/update-championship/update-championship.service");
const start_championship_service_1 = require("../use-cases/start-championship/start-championship.service");
const create_championship_service_1 = require("../use-cases/create-championship/create-championship.service");
const find_registrations_service_1 = require("../use-cases/find-registrations/find-registrations.service");
const create_participant_service_1 = require("../../participant/use-cases/create-participant/create-participant.service");
const find_registration_service_1 = require("../../registrations-team/use-cases/find-registration/find-registration.service");
const registration_team_entity_1 = require("../../registrations-team/models/entity/registration-team.entity");
const participant_entity_1 = require("../../participant/models/entity/participant.entity");
const registration_entity_1 = require("../../registrations-solo/models/entity/registration.entity");
const sport_entity_1 = require("../../sports/models/entity/sport.entity");
const find_registration_service_2 = require("../../registrations-solo/use-cases/find-registration/find-registration.service");
const find_sport_service_1 = require("../../sports/use-cases/find-sport/find-sport.service");
const phase_entity_1 = require("../../phases/entity/phase.entity");
const build_group_phase_service_1 = require("../../phases/use-cases/build-group-phase/build-group-phase.service");
const start_group_phase_service_1 = require("../use-cases/start-group-phase/start-group-phase.service");
const find_participants_service_1 = require("../../participant/use-cases/find-participants/find-participants.service");
const pair_matches_service_1 = require("../../matches/use-cases/pair-matches/pair-matches.service");
const match_entity_1 = require("../../matches/models/entity/match.entity");
const shuffle_match_service_1 = require("../../matches/use-cases/shuffle-match/shuffle-match.service");
const create_match_service_1 = require("../../matches/use-cases/create-match/create-match.service");
const update_match_service_1 = require("../../matches/use-cases/update-match/update-match.service");
const create_player_service_1 = require("../../players/use-cases/create-player/create-player.service");
const find_match_service_1 = require("../../matches/use-cases/find-match/find-match.service");
const player_entity_1 = require("../../players/models/entity/player.entity");
const update_player_service_1 = require("../../players/use-cases/update-player/update-player.service");
const find_player_service_1 = require("../../players/use-cases/find-player/find-player.service");
const find_phase_service_1 = require("../../phases/use-cases/find-phase/find-phase.service");
let ChampionshipModule = class ChampionshipModule {
};
exports.ChampionshipModule = ChampionshipModule;
exports.ChampionshipModule = ChampionshipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([championship_entity_1.Championship, registration_entity_1.RegistrationSolo, registration_team_entity_1.RegistrationTeam, match_entity_1.Match, player_entity_1.Player, sport_entity_1.Sport, participant_entity_1.Participant, phase_entity_1.Phase])],
        controllers: [championships_controller_1.ChampionshipsController],
        providers: [
            championship_entity_1.Championship,
            create_championship_service_1.ChampionshipCreateService,
            delete_championship_solo_service_1.ChampionshipDeleteService,
            find_championship_service_1.ChampionshipFindService,
            update_championship_service_1.ChampionshipUpdateService,
            start_championship_service_1.ChampionshipStartService,
            find_registration_service_2.RegistrationSoloFindService,
            find_sport_service_1.SportFindService,
            create_participant_service_1.ParticipantCreateService,
            find_registration_service_1.RegistrationTeamFindService,
            find_registrations_service_1.ChampionshipFindRegistrationsService,
            build_group_phase_service_1.BuildGroupPhaseService,
            start_group_phase_service_1.StartGroupPhaseService,
            find_participants_service_1.ParticipantFindService,
            pair_matches_service_1.MatchPairService,
            shuffle_match_service_1.MatchShuffleService,
            create_match_service_1.MatchCreateService,
            update_match_service_1.MatchUpdateService,
            create_player_service_1.PlayerCreateService,
            find_match_service_1.MatchFindService,
            update_player_service_1.PlayerUpdateService,
            find_player_service_1.PlayerFindService,
            find_phase_service_1.PhaseFindService
        ],
        exports: [
            delete_championship_solo_service_1.ChampionshipDeleteService,
            find_championship_service_1.ChampionshipFindService,
            update_championship_service_1.ChampionshipUpdateService,
            start_championship_service_1.ChampionshipStartService
        ]
    })
], ChampionshipModule);
//# sourceMappingURL=championships.module.js.map