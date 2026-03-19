import { HttpStatus } from "@nestjs/common";
import { DomainException } from "./domain.exception"

export class BadRequestException extends DomainException {
    constructor(request: Request, message: string, statusCode: HttpStatus) {
        super(message, statusCode);
        this.name = this.constructor.name
    }
}