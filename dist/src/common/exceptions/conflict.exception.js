"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
const common_1 = require("@nestjs/common");
const domain_exception_1 = require("./domain.exception");
class ConflictException extends domain_exception_1.DomainException {
    constructor(message) {
        super(message, common_1.HttpStatus.CONFLICT);
    }
}
exports.ConflictException = ConflictException;
//# sourceMappingURL=conflict.exception.js.map