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
const championship_esports_enum_1 = require("../../common/enums/championship-esports.enum");
const gender_enum_1 = require("../../common/enums/gender-enum");
const modality_enum_1 = require("../../common/enums/modality-enum");
const status_enum_1 = require("../../common/enums/status.enum");
const registration_entity_1 = require("../../registrations/entities/registration.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let Championship = class Championship {
    id;
    name;
    sport;
    gender;
    modality;
    registrationStart;
    registrationEnd;
    status;
    registrations;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Championship = Championship;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Championship.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, type: 'varchar' }),
    __metadata("design:type", String)
], Championship.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: championship_esports_enum_1.SportsEnum }),
    __metadata("design:type", String)
], Championship.prototype, "sport", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: gender_enum_1.GenderEnum }),
    __metadata("design:type", String)
], Championship.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: modality_enum_1.ModalityEnum }),
    __metadata("design:type", String)
], Championship.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], Championship.prototype, "registrationStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Championship.prototype, "registrationEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: status_enum_1.StatusEnum, default: status_enum_1.StatusEnum.INPROGRESS }),
    __metadata("design:type", String)
], Championship.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_entity_1.Registration, (registration) => registration.championship),
    __metadata("design:type", Array)
], Championship.prototype, "registrations", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Championship.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Championship.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Championship.prototype, "deletedAt", void 0);
exports.Championship = Championship = __decorate([
    (0, typeorm_1.Entity)('championships')
], Championship);
//# sourceMappingURL=championship.entity.js.map