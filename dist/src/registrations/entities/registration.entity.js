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
exports.Registration = void 0;
const championship_entity_1 = require("../../championships/entities/championship.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Registration = class Registration {
    id;
    userId;
    championshipId;
    user;
    championship;
    registredAt;
};
exports.Registration = Registration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Registration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registration.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Registration.prototype, "championshipId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], Registration.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => championship_entity_1.Championship, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'championshipId' }),
    __metadata("design:type", championship_entity_1.Championship)
], Registration.prototype, "championship", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", typeorm_1.Timestamp)
], Registration.prototype, "registredAt", void 0);
exports.Registration = Registration = __decorate([
    (0, typeorm_1.Entity)('registrations'),
    (0, typeorm_1.Unique)(['userId', 'championshipId'])
], Registration);
//# sourceMappingURL=registration.entity.js.map