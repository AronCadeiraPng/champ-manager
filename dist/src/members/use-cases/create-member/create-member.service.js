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
exports.MemberCreateService = void 0;
const common_1 = require("@nestjs/common");
const member_entity_1 = require("../../models/entity/member.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const find_member_service_1 = require("../find-member/find-member.service");
const bad_request_exception_1 = require("../../../common/exceptions/bad-request.exception");
let MemberCreateService = class MemberCreateService {
    memberRepository;
    memberFindService;
    constructor(memberRepository, memberFindService) {
        this.memberRepository = memberRepository;
        this.memberFindService = memberFindService;
    }
    async create(createMemberDto) {
        const memberExists = await this.memberFindService.findMemberByTeam(createMemberDto.userId, createMemberDto.teamId);
        if (memberExists)
            throw new bad_request_exception_1.BadRequestException('Esse membro já está registrado no respectivo time!', 400);
        const member = this.memberRepository.create(createMemberDto);
        await this.memberRepository.save(member);
        return member;
    }
};
exports.MemberCreateService = MemberCreateService;
exports.MemberCreateService = MemberCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        find_member_service_1.MemberFindService])
], MemberCreateService);
//# sourceMappingURL=create-member.service.js.map