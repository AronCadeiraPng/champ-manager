"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesModule = void 0;
const common_1 = require("@nestjs/common");
const matches_controller_1 = require("./matches.controller");
const typeorm_1 = require("@nestjs/typeorm");
const match_entity_1 = require("../models/entity/match.entity");
const create_match_service_1 = require("../use-cases/create-match/create-match.service");
const shuffle_match_service_1 = require("../use-cases/shuffle-match/shuffle-match.service");
const player_entity_1 = require("../../players/models/entity/player.entity");
const create_player_service_1 = require("../../players/use-cases/create-player/create-player.service");
const find_match_service_1 = require("../use-cases/find-match/find-match.service");
const update_match_service_1 = require("../use-cases/update-match/update-match.service");
const update_player_service_1 = require("../../players/use-cases/update-player/update-player.service");
const find_player_service_1 = require("../../players/use-cases/find-player/find-player.service");
const pair_matches_service_1 = require("../use-cases/pair-matches/pair-matches.service");
const phase_entity_1 = require("../../phases/entity/phase.entity");
const championship_entity_1 = require("../../championships/models/entity/championship.entity");
const find_championship_service_1 = require("../../championships/use-cases/find-championship/find-championship.service");
const find_phase_service_1 = require("../../phases/use-cases/find-phase/find-phase.service");
const set_winner_service_1 = require("../use-cases/set-winner/set-winner.service");
const get_winners_service_1 = require("../use-cases/get-winners/get-winners.service");
let MatchesModule = class MatchesModule {
};
exports.MatchesModule = MatchesModule;
exports.MatchesModule = MatchesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([championship_entity_1.Championship, match_entity_1.Match, player_entity_1.Player, phase_entity_1.Phase])],
        controllers: [matches_controller_1.MatchesController],
        providers: [
            create_match_service_1.MatchCreateService,
            shuffle_match_service_1.MatchShuffleService,
            pair_matches_service_1.MatchPairService,
            create_player_service_1.PlayerCreateService,
            update_player_service_1.PlayerUpdateService,
            find_player_service_1.PlayerFindService,
            find_match_service_1.MatchFindService,
            find_match_service_1.MatchFindService,
            update_match_service_1.MatchUpdateService,
            set_winner_service_1.MatchSetWinnerService,
            get_winners_service_1.MatchGetWinnersService,
            find_championship_service_1.ChampionshipFindService,
            find_phase_service_1.PhaseFindService
        ],
        exports: [
            create_match_service_1.MatchCreateService,
            shuffle_match_service_1.MatchShuffleService,
            pair_matches_service_1.MatchPairService,
            find_match_service_1.MatchFindService,
            update_match_service_1.MatchUpdateService,
            set_winner_service_1.MatchSetWinnerService,
            get_winners_service_1.MatchGetWinnersService,
        ]
    })
], MatchesModule);
//# sourceMappingURL=matches.module.js.map