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
exports.MemberFindService = void 0;
const common_1 = require("@nestjs/common");
const member_entity_1 = require("../../models/entity/member.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exceptions_1 = require("../../../common/exceptions");
let MemberFindService = class MemberFindService {
    memberRepository;
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
    }
    async findMemberById(id) {
        const member = await this.memberRepository.findOne({
            where: {
                id: id
            }
        });
        if (!member)
            throw new exceptions_1.NotFoundException('Membro', id);
        return member;
    }
    async findMemberByTeam(userId, teamId) {
        const member = await this.memberRepository.findOne({
            where: {
                id: userId,
                teamId: teamId
            }
        });
        return member;
    }
    async findAllMembers() {
        return await this.memberRepository.find();
    }
};
exports.MemberFindService = MemberFindService;
exports.MemberFindService = MemberFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MemberFindService);
//# sourceMappingURL=find-member.service.js.map