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
exports.Player = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const registration_entity_1 = require("../../../registrations-solo/models/entity/registration.entity");
const championship_entity_1 = require("../../../championships/models/entity/championship.entity");
let Player = class Player {
    id;
    registrationId;
    championshipId;
    matchId;
    points;
    championship;
    registration;
    createdAt;
    updatedAt;
};
exports.Player = Player;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'registration-id' }),
    __metadata("design:type", String)
], Player.prototype, "registrationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'championship-id' }),
    __metadata("design:type", String)
], Player.prototype, "championshipId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'match-id', nullable: true }),
    __metadata("design:type", String)
], Player.prototype, "matchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'points', default: 0 }),
    __metadata("design:type", Number)
], Player.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => championship_entity_1.Championship, (championship) => championship.players),
    (0, typeorm_1.JoinColumn)({ name: 'championship-id' }),
    __metadata("design:type", championship_entity_1.Championship)
], Player.prototype, "championship", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => registration_entity_1.RegistrationSolo),
    (0, typeorm_1.JoinColumn)({ name: 'registration-id' }),
    __metadata("design:type", registration_entity_1.RegistrationSolo)
], Player.prototype, "registration", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', name: 'created-at' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Player.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated-at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Player.prototype, "updatedAt", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)('players')
], Player);
//# sourceMappingURL=player.entity.js.map