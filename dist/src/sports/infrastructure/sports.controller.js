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
exports.SportsController = void 0;
const common_1 = require("@nestjs/common");
const create_sport_dto_1 = require("../models/dtos/create-sport.dto");
const create_sport_service_1 = require("../use-cases/create-sport/create-sport.service");
const find_sport_service_1 = require("../use-cases/find-sport/find-sport.service");
let SportsController = class SportsController {
    sportCreateService;
    sportFindService;
    constructor(sportCreateService, sportFindService) {
        this.sportCreateService = sportCreateService;
        this.sportFindService = sportFindService;
    }
    async create(createSportDto) {
        return this.sportCreateService.create(createSportDto);
    }
    async getAll() {
        return this.sportFindService.findAllSport();
    }
    async findById(id) {
        return this.sportFindService.findSportById(id);
    }
};
exports.SportsController = SportsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sport_dto_1.CreateSportDto]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportsController.prototype, "findById", null);
exports.SportsController = SportsController = __decorate([
    (0, common_1.Controller)('sports'),
    __metadata("design:paramtypes", [create_sport_service_1.SportCreateService,
        find_sport_service_1.SportFindService])
], SportsController);
//# sourceMappingURL=sports.controller.js.map