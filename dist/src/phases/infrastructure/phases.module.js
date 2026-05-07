"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhasesModule = void 0;
const common_1 = require("@nestjs/common");
const phases_controller_1 = require("./phases.controller");
const typeorm_1 = require("@nestjs/typeorm");
const phase_entity_1 = require("../entity/phase.entity");
const championship_entity_1 = require("../../championships/models/entity/championship.entity");
const find_championship_service_1 = require("../../championships/use-cases/find-championship/find-championship.service");
const registration_entity_1 = require("../../registrations-solo/models/entity/registration.entity");
const find_registration_service_1 = require("../../registrations-solo/use-cases/find-registration/find-registration.service");
const participant_entity_1 = require("../../participant/models/entity/participant.entity");
const find_participants_service_1 = require("../../participant/use-cases/find-participants/find-participants.service");
const create_phase_service_1 = require("../use-cases/create-phase/create-phase.service");
const match_entity_1 = require("../../matches/models/entity/match.entity");
const create_match_service_1 = require("../../matches/use-cases/create-match/create-match.service");
const create_player_service_1 = require("../../players/use-cases/create-player/create-player.service");
const player_entity_1 = require("../../players/models/entity/player.entity");
const update_match_service_1 = require("../../matches/use-cases/update-match/update-match.service");
const find_match_service_1 = require("../../matches/use-cases/find-match/find-match.service");
const shuffle_match_service_1 = require("../../matches/use-cases/shuffle-match/shuffle-match.service");
const build_group_phase_service_1 = require("../use-cases/build-group-phase/build-group-phase.service");
const update_player_service_1 = require("../../players/use-cases/update-player/update-player.service");
const find_player_service_1 = require("../../players/use-cases/find-player/find-player.service");
const pair_matches_service_1 = require("../../matches/use-cases/pair-matches/pair-matches.service");
const find_phase_service_1 = require("../use-cases/find-phase/find-phase.service");
const get_winners_service_1 = require("../../matches/use-cases/get-winners/get-winners.service");
const build_octave_phase_service_1 = require("../use-cases/build-octave-phase/build-octave-phase.service");
let PhasesModule = class PhasesModule {
};
exports.PhasesModule = PhasesModule;
exports.PhasesModule = PhasesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([phase_entity_1.Phase, championship_entity_1.Championship, registration_entity_1.RegistrationSolo, participant_entity_1.Participant, match_entity_1.Match, player_entity_1.Player])],
        controllers: [phases_controller_1.PhasesController],
        providers: [
            create_phase_service_1.PhaseCreateService,
            build_octave_phase_service_1.PhaseBuildOctaveService,
            find_phase_service_1.PhaseFindService,
            find_championship_service_1.ChampionshipFindService,
            find_registration_service_1.RegistrationSoloFindService,
            find_participants_service_1.ParticipantFindService,
            create_match_service_1.MatchCreateService,
            update_match_service_1.MatchUpdateService,
            find_match_service_1.MatchFindService,
            find_participants_service_1.ParticipantFindService,
            create_player_service_1.PlayerCreateService,
            update_player_service_1.PlayerUpdateService,
            find_player_service_1.PlayerFindService,
            pair_matches_service_1.MatchPairService,
            shuffle_match_service_1.MatchShuffleService,
            get_winners_service_1.MatchGetWinnersService,
            build_group_phase_service_1.BuildGroupPhaseService,
        ],
        exports: [
            create_phase_service_1.PhaseCreateService,
            find_phase_service_1.PhaseFindService,
            build_group_phase_service_1.BuildGroupPhaseService
        ]
    })
], PhasesModule);
//# sourceMappingURL=phases.module.js.map