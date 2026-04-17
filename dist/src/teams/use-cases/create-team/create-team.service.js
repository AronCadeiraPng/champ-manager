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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateService = void 0;
const common_1 = require("@nestjs/common");
const team_entity_1 = require("../../models/entity/team.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const create_member_service_1 = require("../../../members/use-cases/create-member/create-member.service");
let TeamCreateService = class TeamCreateService {
    teamRepository;
    memberCreateService;
    constructor(teamRepository, memberCreateService) {
        this.teamRepository = teamRepository;
        this.memberCreateService = memberCreateService;
    }
    async execute(createTeamDto) {
        const team = new team_entity_1.Team();
        await this.teamRepository.save(team);
        const members = await Promise.all((createTeamDto.membersId ?? []).map((userId) => this.memberCreateService.execute({ userId, teamId: team.id })));
        team.members = members;
        return this.teamRepository.save(team);
    }
};
exports.TeamCreateService = TeamCreateService;
exports.TeamCreateService = TeamCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        create_member_service_1.MemberCreateService])
], TeamCreateService);
//# sourceMappingURL=create-team.service.js.map