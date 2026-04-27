"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhaseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_phase_dto_1 = require("./create-phase.dto");
class UpdatePhaseDto extends (0, swagger_1.PartialType)(create_phase_dto_1.CreatePhaseDto) {
}
exports.UpdatePhaseDto = UpdatePhaseDto;
//# sourceMappingURL=update-phase.dto.js.map