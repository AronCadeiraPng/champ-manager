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
exports.Participant = void 0;
const registration_entity_1 = require("../../../registrations-solo/models/entity/registration.entity");
const registration_team_entity_1 = require("../../../registrations-team/models/entity/registration-team.entity");
const typeorm_1 = require("typeorm");
let Participant = class Participant {
    id;
    userId;
    registrationSoloId;
    registrationTeamId;
    registrationSolo;
    registrationTeam;
};
exports.Participant = Participant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Participant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user-id' }),
    __metadata("design:type", String)
], Participant.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registration-solo-id' }),
    __metadata("design:type", String)
], Participant.prototype, "registrationSoloId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registration-team-id' }),
    __metadata("design:type", String)
], Participant.prototype, "registrationTeamId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => registration_entity_1.RegistrationSolo, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'registration-solo-id' }),
    __metadata("design:type", registration_entity_1.RegistrationSolo)
], Participant.prototype, "registrationSolo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => registration_team_entity_1.RegistrationTeam, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'registration-team-id' }),
    __metadata("design:type", registration_team_entity_1.RegistrationTeam)
], Participant.prototype, "registrationTeam", void 0);
exports.Participant = Participant = __decorate([
    (0, typeorm_1.Entity)('participants')
], Participant);
//# sourceMappingURL=participant.entity.js.map