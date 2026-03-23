"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const common_1 = require("@nestjs/common");
const domain_exception_1 = require("./domain.exception");
class NotFoundException extends domain_exception_1.DomainException {
    constructor(resource, value, label = 'id') {
        super(value
            ? `${resource} com ${label} ${value} não encontrado`
            : `${resource} não encontrado`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NotFoundException = NotFoundException;
//# sourceMappingURL=not-found.exeception.js.map