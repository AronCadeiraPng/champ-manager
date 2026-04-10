"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const player_entity_1 = require("../../players/models/entity/player.entity");
const players_module_1 = require("../../players/infrastructure/players.module");
const match_controller_1 = require("./match.controller");
const create_match_service_1 = require("../use-cases/create-match.service");
const match_entity_1 = require("../models/entity/match.entity");
let MatchModule = class MatchModule {
};
exports.MatchModule = MatchModule;
exports.MatchModule = MatchModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([match_entity_1.Match, player_entity_1.Player]), players_module_1.PlayersModule],
        controllers: [match_controller_1.MatchController],
        providers: [
            create_match_service_1.MatchCreateService
        ],
    })
], MatchModule);
//# sourceMappingURL=match.module.js.map