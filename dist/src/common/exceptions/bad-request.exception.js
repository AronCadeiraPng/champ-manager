"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const domain_exception_1 = require("./domain.exception");
class BadRequestException extends domain_exception_1.DomainException {
    constructor(request, message, statusCode) {
        super(message, statusCode);
        this.name = this.constructor.name;
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=bad-request.exception.js.map