import { HttpStatus } from "@nestjs/common";
import { DomainException } from "./domain.exception";
export declare class BadRequestException extends DomainException {
    constructor(message: string, statusCode: HttpStatus);
}
