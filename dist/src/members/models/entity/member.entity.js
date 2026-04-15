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
exports.Member = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../../users/models/entity/user.entity");
const team_entity_1 = require("../../../teams/models/entity/team.entity");
let Member = class Member {
    id;
    teamId;
    userId;
    user;
    team;
    createdAt;
    updatedAt;
};
exports.Member = Member;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Member.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'team_id', nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "teamId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'user_id', nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.team, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Member.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.members, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'team_id' }),
    __metadata("design:type", team_entity_1.Team)
], Member.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Member.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", typeorm_2.Timestamp)
], Member.prototype, "updatedAt", void 0);
exports.Member = Member = __decorate([
    (0, typeorm_1.Entity)('members')
], Member);
//# sourceMappingURL=member.entity.js.map