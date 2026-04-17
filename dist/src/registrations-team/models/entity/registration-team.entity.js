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
exports.RegistrationTeam = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const team_entity_1 = require("../../../teams/models/entity/team.entity");
const participant_entity_1 = require("../../../participant/models/entity/participant.entity");
const championship_entity_1 = require("../../../championships/models/entity/championship.entity");
let RegistrationTeam = class RegistrationTeam {
    id;
    championshipId;
    teamId;
    team;
    participant;
    championship;
    createdAt;
    updatedAt;
};
exports.RegistrationTeam = RegistrationTeam;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegistrationTeam.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'championship_id' }),
    __metadata("design:type", String)
], RegistrationTeam.prototype, "championshipId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'team_id', nullable: true }),
    __metadata("design:type", String)
], RegistrationTeam.prototype, "teamId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.registration),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    __metadata("design:type", team_entity_1.Team)
], RegistrationTeam.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => participant_entity_1.Participant, { nullable: true }),
    __metadata("design:type", participant_entity_1.Participant)
], RegistrationTeam.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => championship_entity_1.Championship, (championship) => championship.registrationsTeam),
    (0, typeorm_1.JoinColumn)({ name: 'championship_id' }),
    __metadata("design:type", championship_entity_1.Championship)
], RegistrationTeam.prototype, "championship", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created-at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], RegistrationTeam.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated-at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], RegistrationTeam.prototype, "updatedAt", void 0);
exports.RegistrationTeam = RegistrationTeam = __decorate([
    (0, typeorm_1.Entity)('registrations-team')
], RegistrationTeam);
//# sourceMappingURL=registration-team.entity.js.map