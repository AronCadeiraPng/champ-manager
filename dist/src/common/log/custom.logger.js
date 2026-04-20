"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CustomLogger_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const nestjs_pino_1 = require("nestjs-pino");
let CustomLogger = class CustomLogger {
    static { CustomLogger_1 = this; }
    logger;
    static contextRules = {};
    LOG_LEVEL_MAP = {
        trace: 0,
        debug: 1,
        info: 2,
        warn: 3,
        error: 4
    };
    constructor(logger) {
        this.logger = logger;
        if (Object.keys(CustomLogger_1.contextRules).length === 0) {
            this.initializeContextRules();
        }
    }
    log(message, context) {
        if (this.shouldLog('log', context)) {
            this.logger.trace({ context }, message);
        }
    }
    fatal(message, context) {
        if (this.shouldLog('fatal', context)) {
            this.logger.fatal({ context }, message);
        }
    }
    error(message, context) {
        if (this.shouldLog('error', context)) {
            this.logger.error({ context }, message);
        }
    }
    warn(message, context) {
        if (this.shouldLog('warn', context)) {
            this.logger.warn({ context }, message);
        }
    }
    debug(message, context) {
        if (this.shouldLog('debug', context)) {
            this.logger.debug({ context }, message);
        }
    }
    initializeContextRules() {
        const rules = process.env.LOG_RULES;
        if (!rules) {
            CustomLogger_1.contextRules['*'] = this.LOG_LEVEL_MAP['info'];
            return;
        }
        const rulesEntries = rules.split('/');
        for (const rule of rulesEntries) {
            let contextPart = '*';
            let levelPart = 'info';
            const parts = rule.split(';');
            for (const part of parts) {
                if (part.startsWith('context=')) {
                    contextPart = part.split('=')[1] || contextPart;
                }
                else if (part.startsWith('level=')) {
                    levelPart = part.split('=')[1] || levelPart;
                }
            }
            const contexts = contextPart.split(',');
            const numericLevel = this.LOG_LEVEL_MAP[levelPart.trim()] || this.LOG_LEVEL_MAP['info'];
            for (const context of contexts) {
                CustomLogger_1.contextRules[context.trim()] = numericLevel;
            }
        }
    }
    shouldLog(methodLevel, context) {
        return this.LOG_LEVEL_MAP[methodLevel] >= this.getLogLevel(context);
    }
    getLogLevel(context) {
        context = context || '';
        const level = CustomLogger_1.contextRules[context] ?? CustomLogger_1.contextRules['*'] ?? this.LOG_LEVEL_MAP['info'];
        return level;
    }
};
exports.CustomLogger = CustomLogger;
exports.CustomLogger = CustomLogger = CustomLogger_1 = __decorate([
    __param(0, (0, nestjs_pino_1.InjectPinoLogger)()),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger])
], CustomLogger);
//# sourceMappingURL=custom.logger.js.map