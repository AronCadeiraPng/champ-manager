"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantModule = void 0;
const common_1 = require("@nestjs/common");
const participant_controller_1 = require("./participant.controller");
const typeorm_1 = require("@nestjs/typeorm");
const participant_entity_1 = require("../models/entity/participant.entity");
const registrations_module_1 = require("../../registrations-solo/infrastructure/registrations.module");
const find_registration_service_1 = require("../../registrations-solo/use-cases/find-registration/find-registration.service");
const create_participant_service_1 = require("../use-cases/create-participant/create-participant.service");
const registration_entity_1 = require("../../registrations-solo/models/entity/registration.entity");
const find_participants_service_1 = require("../use-cases/find-participants/find-participants.service");
let ParticipantModule = class ParticipantModule {
};
exports.ParticipantModule = ParticipantModule;
exports.ParticipantModule = ParticipantModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([participant_entity_1.Participant, registration_entity_1.RegistrationSolo]), registrations_module_1.RegistrationSoloModule],
        controllers: [participant_controller_1.ParticipantController],
        providers: [
            registrations_module_1.RegistrationSoloModule,
            create_participant_service_1.ParticipantCreateService,
            find_participants_service_1.ParticipantFindService,
            find_registration_service_1.RegistrationSoloFindService
        ],
        exports: [
            ParticipantModule,
            create_participant_service_1.ParticipantCreateService
        ]
    })
], ParticipantModule);
//# sourceMappingURL=participant.module.js.map