import { LoggerService } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
export declare class CustomLogger implements LoggerService {
    private readonly logger;
    private static contextRules;
    private readonly LOG_LEVEL_MAP;
    constructor(logger: PinoLogger);
    log(message: string, context: string): void;
    fatal(message: string, context: string): void;
    error(message: string, context: string): void;
    warn(message: string, context: string): void;
    debug?(message: string, context: string): void;
    private initializeContextRules;
    private shouldLog;
    private getLogLevel;
}
