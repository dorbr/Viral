"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./config"));
const exceptions_1 = __importDefault(require("./exceptions"));
const logger_1 = __importDefault(require("./logger"));
const requestLogger = (request, response, next) => {
    logger_1.default.info.limited('Method:', request.method);
    logger_1.default.info.limited('Path:  ', request.path);
    logger_1.default.info.limited('Body:  ', request.body);
    logger_1.default.info.limited('---');
    next();
};
const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' });
};
const errorHandler = (error, request, response, next) => {
    logger_1.default.error.limited(error.message);
    response.header('Content-Type', 'application/json');
    const status = error.statusCode || 400;
    response.status(status).send(error.message);
};
const verifyJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization ||
            req.headers.Authorization;
        if (!authHeader.startsWith('Bearer ')) {
            next(new exceptions_1.default.UnauthorizedError());
        }
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.ACCESS_TOKEN_SECRET);
        req.session = decoded.data;
        next();
    }
    catch (err) {
        next(new exceptions_1.default.ForbiddenError());
    }
};
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (config_1.default.ALLOWED_ORIGINS.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
};
exports.default = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
    verifyJWT,
    credentials,
};
