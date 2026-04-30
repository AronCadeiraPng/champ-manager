"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phase = void 0;
const championship_entity_1 = require("../../championships/models/entity/championship.entity");
const phase_name_enum_1 = require("../../common/enums/phase-name.enum");
const phase_status_enum_1 = require("../../common/enums/phase-status.enum");
const match_entity_1 = require("../../matches/models/entity/match.entity");
const typeorm_1 = require("typeorm");
let Phase = class Phase {
    id;
    name;
    phaseStatus;
    championshipId;
    championship;
    matches;
    createdAt;
    updatedAt;
};
exports.Phase = Phase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Phase.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: phase_name_enum_1.PhaseName, default: phase_name_enum_1.PhaseName.GROUP_FASE }),
    __metadata("design:type", String)
], Phase.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ enum: phase_status_enum_1.PhaseStatus, default: phase_status_enum_1.PhaseStatus.IN_PROGRESS }),
    __metadata("design:type", String)
], Phase.prototype, "phaseStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'championship_id' }),
    __metadata("design:type", String)
], Phase.prototype, "championshipId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => championship_entity_1.Championship, (championship) => championship.phases),
    (0, typeorm_1.JoinColumn)({ name: 'championship_id' }),
    __metadata("design:type", championship_entity_1.Championship)
], Phase.prototype, "championship", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, (match) => match.players, { nullable: true }),
    __metadata("design:type", Array)
], Phase.prototype, "matches", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', name: 'created_at' }),
    __metadata("design:type", typeorm_1.Timestamp)
], Phase.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', name: 'updated_at' }),
    __metadata("design:type", typeorm_1.Timestamp)
], Phase.prototype, "updatedAt", void 0);
exports.Phase = Phase = __decorate([
    (0, typeorm_1.Entity)('phases')
], Phase);
//# sourceMappingURL=phase.entity.js.map