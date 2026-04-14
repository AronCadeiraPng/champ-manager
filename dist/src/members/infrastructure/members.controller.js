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
exports.MembersController = void 0;
const common_1 = require("@nestjs/common");
const create_member_dto_1 = require("../models/dtos/create-member.dto");
const create_member_service_1 = require("../use-cases/create-member/create-member.service");
const find_member_service_1 = require("../use-cases/find-member/find-member.service");
let MembersController = class MembersController {
    memberCreateService;
    memberFindSerivce;
    constructor(memberCreateService, memberFindSerivce) {
        this.memberCreateService = memberCreateService;
        this.memberFindSerivce = memberFindSerivce;
    }
    async createMember(createMemberDto) {
        return await this.memberCreateService.create(createMemberDto);
    }
    async findAllMembers() {
        return await this.memberFindSerivce.findAllMembers();
    }
    async findMemberById(id) {
        return await this.findMemberById(id);
    }
};
exports.MembersController = MembersController;
__decorate([
    (0, common_1.Post)('new'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_member_dto_1.CreateMemberDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "createMember", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "findAllMembers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "findMemberById", null);
exports.MembersController = MembersController = __decorate([
    (0, common_1.Controller)('members'),
    __metadata("design:paramtypes", [create_member_service_1.MemberCreateService,
        find_member_service_1.MemberFindService])
], MembersController);
//# sourceMappingURL=members.controller.js.map