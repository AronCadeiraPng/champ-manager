// src/common/filters/http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { DomainException } from '../exceptions/domain.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { status, message } = this.resolveException(exception);

    if (status < 500) {
      this.logger.warn(`\n method: [${request.method}]\n path: ${request.url} → \n status: ${status} \n message: ${message}`);
    } else {
      this.logger.error(
        `[${request.method}] ${request.url}\n \n → ${status}: ${message}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
    });
  }

  private resolveException(exception: unknown) {
    if (exception instanceof DomainException) {
      return { status: exception.statusCode, message: exception.message };
    }
    if (exception instanceof HttpException) {
      return { status: exception.getStatus(), message: exception.message };
    }
    return { status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Erro interno do servidor' };
  }
}