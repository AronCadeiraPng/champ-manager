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
exports.Sport = void 0;
const championship_entity_1 = require("../../../championships/models/entity/championship.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let Sport = class Sport {
    id;
    name;
    deleted;
    championship;
    createdAt;
    updatedAt;
};
exports.Sport = Sport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Sport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, name: 'name' }),
    __metadata("design:type", String)
], Sport.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', name: 'deleted', nullable: true }),
    __metadata("design:type", Boolean)
], Sport.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => championship_entity_1.Championship, (championship) => championship.sport),
    __metadata("design:type", championship_entity_1.Championship)
], Sport.prototype, "championship", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Sport.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Sport.prototype, "updatedAt", void 0);
exports.Sport = Sport = __decorate([
    (0, typeorm_1.Entity)()
], Sport);
//# sourceMappingURL=sport.entity.js.map