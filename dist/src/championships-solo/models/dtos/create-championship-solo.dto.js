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
exports.CreateChampionshipSoloDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const gender_enum_1 = require("../../../common/enums/gender.enum");
const modality_enum_1 = require("../../../common/enums/modality.enum");
const championship_status_enum_1 = require("../../../common/enums/championship-status.enum");
class CreateChampionshipSoloDto {
    name;
    sportId;
    gender;
    modality;
    registrationStart;
    registrationEnd;
    status;
}
exports.CreateChampionshipSoloDto = CreateChampionshipSoloDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sinuca Masculino 2026',
        description: 'Nome do torneio'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "sportId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'masculine',
        description: 'Gênero do torneio'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'solo-game',
        description: 'Modo do torneio (dupla ou sozinho)'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "modality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: '05/10/2026',
        description: 'Data de início das inscrições'
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "registrationStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '10/05/2026',
        description: 'Data de término das inscrições'
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "registrationEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'in-progress',
        description: 'Status do torneio'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChampionshipSoloDto.prototype, "status", void 0);
//# sourceMappingURL=create-championship-solo.dto.js.map