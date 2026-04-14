"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsModule = void 0;
const common_1 = require("@nestjs/common");
const sports_controller_1 = require("./sports.controller");
const registrations_module_1 = require("../../registrations-solo/infrastructure/registrations.module");
const find_sport_service_1 = require("../use-cases/find-sport/find-sport.service");
const create_sport_service_1 = require("../use-cases/create-sport/create-sport.service");
const delete_sport_service_1 = require("../use-cases/delete-sport/delete-sport.service");
const update_sport_service_1 = require("../use-cases/update-sport/update-sport.service");
const typeorm_1 = require("@nestjs/typeorm");
const sport_entity_1 = require("../models/entity/sport.entity");
let SportsModule = class SportsModule {
};
exports.SportsModule = SportsModule;
exports.SportsModule = SportsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sport_entity_1.Sport]), registrations_module_1.RegistrationSoloModule],
        controllers: [sports_controller_1.SportsController],
        providers: [
            find_sport_service_1.SportFindService,
            create_sport_service_1.SportCreateService,
            delete_sport_service_1.SportDeleteService,
            update_sport_service_1.SportUpdateService
        ],
        exports: [
            SportsModule,
            find_sport_service_1.SportFindService
        ]
    })
], SportsModule);
//# sourceMappingURL=sports.module.js.map