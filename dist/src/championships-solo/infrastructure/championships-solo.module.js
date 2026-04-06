"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChampionshipSoloModule = void 0;
const common_1 = require("@nestjs/common");
const championships_solo_controller_1 = require("./championships-solo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const championship_solo_entity_1 = require("../models/entity/championship-solo.entity");
const create_championship_solo_service_1 = require("../use-cases/create-championship/create-championship-solo.service");
const delete_championship_solo_service_1 = require("../use-cases/delete-championship/delete-championship-solo.service");
const find_championship_solo_service_1 = require("../use-cases/find-championship/find-championship-solo.service");
const update_championship_solo_service_1 = require("../use-cases/update-championship/update-championship-solo.service");
const registration_entity_1 = require("../../registrations-solo/models/entity/registration.entity");
let ChampionshipSoloModule = class ChampionshipSoloModule {
};
exports.ChampionshipSoloModule = ChampionshipSoloModule;
exports.ChampionshipSoloModule = ChampionshipSoloModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([championship_solo_entity_1.ChampionshipSolo, registration_entity_1.RegistrationSolo])],
        controllers: [championships_solo_controller_1.ChampionshipsController],
        providers: [
            championship_solo_entity_1.ChampionshipSolo,
            create_championship_solo_service_1.ChampionshipSoloCreateService,
            delete_championship_solo_service_1.ChampionshipSoloDeleteService,
            find_championship_solo_service_1.ChampionshipSoloFindService,
            update_championship_solo_service_1.ChampionshipSoloUpdateService
        ],
        exports: [
            create_championship_solo_service_1.ChampionshipSoloCreateService,
            delete_championship_solo_service_1.ChampionshipSoloDeleteService,
            find_championship_solo_service_1.ChampionshipSoloFindService,
            update_championship_solo_service_1.ChampionshipSoloUpdateService
        ]
    })
], ChampionshipSoloModule);
//# sourceMappingURL=championships-solo.module.js.map