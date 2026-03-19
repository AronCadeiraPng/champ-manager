import { DomainException } from './domain.exception';
export declare class ForbiddenException extends DomainException {
    constructor(action?: string);
}
