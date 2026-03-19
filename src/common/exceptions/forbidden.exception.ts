import { HttpStatus } from '@nestjs/common';
import { DomainException } from './domain.exception';

export class ForbiddenException extends DomainException {
  constructor(action?: string) {
    super(
      action ? `Você não tem permissão para ${action}` : 'Acesso negado',
      HttpStatus.FORBIDDEN,
    );
  }
}