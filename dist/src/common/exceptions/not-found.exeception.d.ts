import { DomainException } from './domain.exception';
export declare class NotFoundException extends DomainException {
    constructor(resource: string, value?: string | number, label?: string);
}
