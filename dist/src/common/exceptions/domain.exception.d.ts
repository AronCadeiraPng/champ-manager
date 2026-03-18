import { HttpStatus } from '@nestjs/common';
export declare class DomainException extends Error {
    readonly message: string;
    readonly statusCode: HttpStatus;
    readonly errors?: Record<string, string[]> | undefined;
    constructor(message: string, statusCode: HttpStatus, errors?: Record<string, string[]> | undefined);
}
