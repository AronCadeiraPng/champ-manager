"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersModule = void 0;
const common_1 = require("@nestjs/common");
const members_controller_1 = require("./members.controller");
const find_member_service_1 = require("../use-cases/find-member/find-member.service");
const create_member_service_1 = require("../use-cases/create-member/create-member.service");
const typeorm_1 = require("@nestjs/typeorm");
const member_entity_1 = require("../models/entity/member.entity");
const delete_member_service_1 = require("../use-cases/delete-member/delete-member.service");
let MembersModule = class MembersModule {
};
exports.MembersModule = MembersModule;
exports.MembersModule = MembersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([member_entity_1.Member])],
        controllers: [members_controller_1.MembersController],
        providers: [
            find_member_service_1.MemberFindService,
            create_member_service_1.MemberCreateService,
            delete_member_service_1.MemberDeleteService
        ],
        exports: [
            MembersModule,
            create_member_service_1.MemberCreateService,
            find_member_service_1.MemberFindService,
            delete_member_service_1.MemberDeleteService
        ]
    })
], MembersModule);
//# sourceMappingURL=members.module.js.map