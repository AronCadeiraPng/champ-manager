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
exports.TeamDeleteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const delete_member_service_1 = require("../../../members/use-cases/delete-member/delete-member.service");
const team_entity_1 = require("../../models/entity/team.entity");
const typeorm_2 = require("typeorm");
const find_team_service_1 = require("../find-team/find-team.service");
let TeamDeleteService = class TeamDeleteService {
    teamRepository;
    teamFindService;
    memberDeleteService;
    constructor(teamRepository, teamFindService, memberDeleteService) {
        this.teamRepository = teamRepository;
        this.teamFindService = teamFindService;
        this.memberDeleteService = memberDeleteService;
    }
    async deleteTeamById(teamId) {
        const team = await this.teamFindService.findTeamById(teamId);
        return this.teamRepository.remove(team);
    }
    async deleteAllTeams() {
        await this.memberDeleteService.deleteAllMembers();
        return await this.teamRepository.clear();
    }
};
exports.TeamDeleteService = TeamDeleteService;
exports.TeamDeleteService = TeamDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_team_service_1.TeamFindService,
        delete_member_service_1.MemberDeleteService])
], TeamDeleteService);
//# sourceMappingURL=delete-team.service.js.map