"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
const common_1 = require("@nestjs/common");
const domain_exception_1 = require("./domain.exception");
class ForbiddenException extends domain_exception_1.DomainException {
    constructor(action) {
        super(action ? `Você não tem permissão para ${action}` : 'Acesso negado', common_1.HttpStatus.FORBIDDEN);
    }
}
exports.ForbiddenException = ForbiddenException;
//# sourceMappingURL=forbidden.exception.js.map