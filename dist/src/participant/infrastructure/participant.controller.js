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
exports.ParticipantController = void 0;
const common_1 = require("@nestjs/common");
const find_participants_service_1 = require("../use-cases/find-participants/find-participants.service");
const create_participant_service_1 = require("../use-cases/create-participant/create-participant.service");
const create_participant_dto_1 = require("../models/dtos/create-participant.dto");
const swagger_1 = require("@nestjs/swagger");
let ParticipantController = class ParticipantController {
    participantFindService;
    participantCreateService;
    constructor(participantFindService, participantCreateService) {
        this.participantFindService = participantFindService;
        this.participantCreateService = participantCreateService;
    }
    async createParticipant(championshipId, createParticipantDto) {
        return this.participantCreateService.createParticipant(championshipId, createParticipantDto);
    }
    async findAllParticipants() {
        return this.participantFindService.findAllParticipants();
    }
    async findParticipantsByChampionship(championshipId) {
        return this.participantFindService.findParticipantsByChampionship(championshipId);
    }
};
exports.ParticipantController = ParticipantController;
__decorate([
    (0, common_1.Post)(':id/create'),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um novo participante' }),
    (0, swagger_1.ApiOkResponse)({ type: create_participant_dto_1.CreateParticipantDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Torneio não encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_participant_dto_1.CreateParticipantDto]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "createParticipant", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os participantes' }),
    (0, swagger_1.ApiOkResponse)({ type: create_participant_dto_1.CreateParticipantDto }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Nenhum participante encontrado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findAllParticipants", null);
__decorate([
    (0, common_1.Get)('championship/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna todos os participantes em um torneio' }),
    (0, swagger_1.ApiOkResponse)({ type: create_participant_dto_1.CreateParticipantDto }),
    (0, swagger_1.ApiNoContentResponse)({ description: 'Nenhum participante encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ParticipantController.prototype, "findParticipantsByChampionship", null);
exports.ParticipantController = ParticipantController = __decorate([
    (0, swagger_1.ApiTags)('participants'),
    (0, common_1.Controller)('participants'),
    __metadata("design:paramtypes", [find_participants_service_1.ParticipantFindService,
        create_participant_service_1.ParticipantCreateService])
], ParticipantController);
//# sourceMappingURL=participant.controller.js.map