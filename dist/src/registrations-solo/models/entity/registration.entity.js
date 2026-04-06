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
const championship_solo_entity_1 = require("../../../championships-solo/models/entity/championship-solo.entity");
const user_entity_1 = require("../../../users/models/entity/user.entity");
const typeorm_1 = require("typeorm");
let RegistrationSolo = class RegistrationSolo {
    id;
    userId;
    championshipId;
    registredAt;
    user;
    championship;
};
exports.RegistrationSolo = RegistrationSolo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RegistrationSolo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'user-id' }),
    __metadata("design:type", String)
], RegistrationSolo.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'championship-id' }),
    __metadata("design:type", String)
], RegistrationSolo.prototype, "championshipId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", typeorm_1.Timestamp)
], RegistrationSolo.prototype, "registredAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.registrationsSolo),
    (0, typeorm_1.JoinColumn)({ name: 'user-id' }),
    __metadata("design:type", user_entity_1.User)
], RegistrationSolo.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => championship_solo_entity_1.ChampionshipSolo, (championship) => championship.registration),
    (0, typeorm_1.JoinColumn)({ name: 'championship-id' }),
    __metadata("design:type", championship_solo_entity_1.ChampionshipSolo)
], RegistrationSolo.prototype, "championship", void 0);
exports.RegistrationSolo = RegistrationSolo = __decorate([
    (0, typeorm_1.Entity)('registrations-solo'),
    (0, typeorm_1.Unique)(['userId', 'championshipId'])
], RegistrationSolo);
//# sourceMappingURL=registration.entity.js.map