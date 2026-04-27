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
const create_phase_service_1 = require("../use-cases/create-phase.service");
let PhasesModule = class PhasesModule {
};
exports.PhasesModule = PhasesModule;
exports.PhasesModule = PhasesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([phase_entity_1.Phase])],
        controllers: [phases_controller_1.PhasesController],
        providers: [
            create_phase_service_1.PhaseCreateService,
        ],
        exports: [
            create_phase_service_1.PhaseCreateService
        ]
    })
], PhasesModule);
//# sourceMappingURL=phases.module.js.map