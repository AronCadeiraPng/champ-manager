"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationSoloModule = void 0;
const common_1 = require("@nestjs/common");
const registrations_controller_1 = require("./registrations.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../../users/infrastructure/user.module");
const user_entity_1 = require("../../users/models/entity/user.entity");
const registration_entity_1 = require("../models/entity/registration.entity");
const championship_solo_entity_1 = require("../../championships-solo/models/entity/championship-solo.entity");
const championships_solo_module_1 = require("../../championships-solo/infrastructure/championships-solo.module");
const create_registration_service_1 = require("../use-cases/create-registration/create-registration.service");
const delete_registration_service_1 = require("../use-cases/delete-registration/delete-registration.service");
const find_registration_service_1 = require("../use-cases/find-registration/find-registration.service");
let RegistrationSoloModule = class RegistrationSoloModule {
};
exports.RegistrationSoloModule = RegistrationSoloModule;
exports.RegistrationSoloModule = RegistrationSoloModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                registration_entity_1.RegistrationSolo,
                championship_solo_entity_1.ChampionshipSolo,
                user_entity_1.User
            ]),
            championships_solo_module_1.ChampionshipSoloModule,
            user_module_1.UserModule
        ],
        controllers: [registrations_controller_1.RegistrationsSoloController],
        providers: [
            create_registration_service_1.RegistrationSoloCreateService,
            delete_registration_service_1.RegistrationSoloDeleteService,
            find_registration_service_1.RegistrationSoloFindService
        ],
        exports: [
            RegistrationSoloModule,
            find_registration_service_1.RegistrationSoloFindService
        ]
    })
], RegistrationSoloModule);
//# sourceMappingURL=registrations.module.js.map