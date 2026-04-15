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
exports.Championship = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const gender_enum_1 = require("../../../common/enums/gender.enum");
const modality_enum_1 = require("../../../common/enums/modality.enum");
const championship_status_enum_1 = require("../../../common/enums/championship-status.enum");
const sport_entity_1 = require("../../../sports/models/entity/sport.entity");
const registration_entity_1 = require("../../../registrations-solo/models/entity/registration.entity");
let Championship = class Championship {
    id;
    name;
    gender;
    modality;
    registrationStart;
    registrationEnd;
    status;
    sportId;
    createdAt;
    updatedAt;
    deletedAt;
    sport;
    registrations;
};
exports.Championship = Championship;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Championship.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, type: 'varchar', name: 'name' }),
    __metadata("design:type", String)
], Championship.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: gender_enum_1.GenderEnum, name: 'gender' }),
    __metadata("design:type", String)
], Championship.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: modality_enum_1.ModalityEnum, default: modality_enum_1.ModalityEnum.SOLO, name: 'modality' }),
    __metadata("design:type", String)
], Championship.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date(), name: 'registration_start' }),
    __metadata("design:type", Date)
], Championship.prototype, "registrationStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', name: 'registration_end' }),
    __metadata("design:type", Date)
], Championship.prototype, "registrationEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: championship_status_enum_1.StatusEnum, name: 'status' }),
    __metadata("design:type", String)
], Championship.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sport' }),
    __metadata("design:type", String)
], Championship.prototype, "sportId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', name: 'created_at' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Championship.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', name: 'updated_at' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Championship.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz', name: 'deleted_at' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Championship.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sport_entity_1.Sport),
    (0, typeorm_1.JoinColumn)({ name: 'sport' }),
    __metadata("design:type", sport_entity_1.Sport)
], Championship.prototype, "sport", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_entity_1.RegistrationSolo, (registrations) => registrations.championship),
    __metadata("design:type", Array)
], Championship.prototype, "registrations", void 0);
exports.Championship = Championship = __decorate([
    (0, typeorm_1.Entity)('championships')
], Championship);
//# sourceMappingURL=championship.entity.js.map