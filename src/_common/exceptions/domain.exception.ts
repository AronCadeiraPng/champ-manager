import { HttpStatus } from '@nestjs/common';

export class DomainException extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: HttpStatus,
    public readonly errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}
