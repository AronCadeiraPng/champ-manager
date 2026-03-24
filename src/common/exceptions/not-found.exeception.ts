import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.exception';

export class NotFoundException extends DomainException {
  constructor(resource: string, value?: string | number, label: string = 'id') {
    super(
      value ? `${resource} com ${label} ${value} não encontrado` : `${resource} não encontrado`,
      HttpStatus.NOT_FOUND,
    );
  }
}