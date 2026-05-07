"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersModule = void 0;
const common_1 = require("@nestjs/common");
const players_controller_1 = require("./players.controller");
const typeorm_1 = require("@nestjs/typeorm");
const player_entity_1 = require("../models/entity/player.entity");
const create_player_service_1 = require("../use-cases/create-player/create-player.service");
const find_player_service_1 = require("../use-cases/find-player/find-player.service");
const update_player_service_1 = require("../use-cases/update-player/update-player.service");
const find_phase_service_1 = require("../../phases/use-cases/find-phase/find-phase.service");
const phase_entity_1 = require("../../phases/entity/phase.entity");
let PlayersModule = class PlayersModule {
};
exports.PlayersModule = PlayersModule;
exports.PlayersModule = PlayersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([player_entity_1.Player, phase_entity_1.Phase])],
        controllers: [players_controller_1.PlayersController],
        providers: [
            create_player_service_1.PlayerCreateService,
            find_player_service_1.PlayerFindService,
            update_player_service_1.PlayerUpdateService,
            find_phase_service_1.PhaseFindService
        ],
        exports: [
            create_player_service_1.PlayerCreateService,
            find_player_service_1.PlayerFindService,
            update_player_service_1.PlayerUpdateService
        ]
    })
], PlayersModule);
//# sourceMappingURL=players.module.js.map