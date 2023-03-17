"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = exports.logger = exports.exceptions = exports.config = void 0;
const config_1 = __importDefault(require("./config"));
exports.config = config_1.default;
const exceptions_1 = __importDefault(require("./exceptions"));
exports.exceptions = exceptions_1.default;
const logger_1 = __importDefault(require("./logger"));
exports.logger = logger_1.default;
const middlewares_1 = __importDefault(require("./middlewares"));
exports.middlewares = middlewares_1.default;
exports.default = {
    config: config_1.default,
    exceptions: exceptions_1.default,
    logger: logger_1.default,
    middlewares: middlewares_1.default,
};
