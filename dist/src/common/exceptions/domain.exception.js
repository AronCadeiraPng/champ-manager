"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    message;
    statusCode;
    errors;
    constructor(message, statusCode, errors) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errors = errors;
        this.name = this.constructor.name;
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map