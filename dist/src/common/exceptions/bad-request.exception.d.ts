import { HttpStatus } from "@nestjs/common";
import { DomainException } from "./domain.exception";
export declare class BadRequestException extends DomainException {
    constructor(request: Request, message: string, statusCode: HttpStatus);
}
