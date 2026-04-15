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
exports.RegistrationSolo = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../../users/models/entity/user.entity");
const championship_entity_1 = require("../../../championships/models/entity/championship.entity");
const participant_entity_1 = require("../../../participant/models/entity/participant.entity");
let RegistrationSolo = class RegistrationSolo {
    id;
    userId;
    championshipId;
    user;
    championship;
    participant;
    registredAt;
    updatedAt;
};
exports.RegistrationSolo = RegistrationSolo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegistrationSolo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'user_id' }),
    __metadata("design:type", String)
], RegistrationSolo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'championship_id' }),
    __metadata("design:type", String)
], RegistrationSolo.prototype, "championshipId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.registrationsSolo),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], RegistrationSolo.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => championship_entity_1.Championship, (championship) => championship.registrations),
    (0, typeorm_1.JoinColumn)({ name: 'championship_id' }),
    __metadata("design:type", championship_entity_1.Championship)
], RegistrationSolo.prototype, "championship", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => participant_entity_1.Participant, (participant) => participant.registrationSolo, { nullable: true }),
    __metadata("design:type", participant_entity_1.Participant)
], RegistrationSolo.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'registred_at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_1.Timestamp)
], RegistrationSolo.prototype, "registredAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_1.Timestamp)
], RegistrationSolo.prototype, "updatedAt", void 0);
exports.RegistrationSolo = RegistrationSolo = __decorate([
    (0, typeorm_1.Entity)('registrations-solo'),
    (0, typeorm_1.Unique)(['userId', 'championshipId'])
], RegistrationSolo);
//# sourceMappingURL=registration.entity.js.map