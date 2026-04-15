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
const registration_entity_1 = require("../../registrations-solo/models/entity/registration.entity");
const find_registration_service_1 = require("../../registrations-solo/use-cases/find-registration/find-registration.service");
const find_sport_service_1 = require("../../sports/use-cases/find-sport/find-sport.service");
const sport_entity_1 = require("../../sports/models/entity/sport.entity");
const championship_entity_1 = require("../models/entity/championship.entity");
const championships_controller_1 = require("./championships.controller");
const delete_championship_solo_service_1 = require("../use-cases/delete-championship/delete-championship-solo.service");
const find_championship_service_1 = require("../use-cases/find-championship/find-championship.service");
const update_championship_service_1 = require("../use-cases/update-championship/update-championship.service");
const start_championship_service_1 = require("../use-cases/start-championship/start-championship.service");
const create_championship_service_1 = require("../use-cases/create-championship/create-championship.service");
const create_participant_service_1 = require("../../participant/use-cases/create-participant/create-participant.service");
const participant_entity_1 = require("../../participant/models/entity/participant.entity");
let ChampionshipModule = class ChampionshipModule {
};
exports.ChampionshipModule = ChampionshipModule;
exports.ChampionshipModule = ChampionshipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([championship_entity_1.Championship, registration_entity_1.RegistrationSolo, sport_entity_1.Sport, participant_entity_1.Participant])],
        controllers: [championships_controller_1.ChampionshipsController],
        providers: [
            championship_entity_1.Championship,
            create_championship_service_1.ChampionshipCreateService,
            delete_championship_solo_service_1.ChampionshipDeleteService,
            find_championship_service_1.ChampionshipFindService,
            update_championship_service_1.ChampionshipUpdateService,
            start_championship_service_1.ChampionshipStartService,
            find_registration_service_1.RegistrationSoloFindService,
            find_sport_service_1.SportFindService,
            create_participant_service_1.ParticipantCreateService
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