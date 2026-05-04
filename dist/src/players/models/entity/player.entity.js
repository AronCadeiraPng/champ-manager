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
const match_entity_1 = require("../../../matches/models/entity/match.entity");
const participant_entity_1 = require("../../../participant/models/entity/participant.entity");
const typeorm_1 = require("typeorm");
let Player = class Player {
    id;
    points;
    matchId;
    participantId;
    participant;
    match;
};
exports.Player = Player;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'points', default: 0, nullable: true }),
    __metadata("design:type", Number)
], Player.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'match_id', nullable: true }),
    __metadata("design:type", String)
], Player.prototype, "matchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'participant_id' }),
    __metadata("design:type", String)
], Player.prototype, "participantId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participant_entity_1.Participant, (participant) => participant.player, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'participant_id' }),
    __metadata("design:type", participant_entity_1.Participant)
], Player.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_entity_1.Match, (match) => match.players, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'match_id' }),
    __metadata("design:type", match_entity_1.Match)
], Player.prototype, "match", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)('players')
], Player);
//# sourceMappingURL=player.entity.js.map