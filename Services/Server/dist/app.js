"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import cookieParser from 'cookie-parser'
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const utils_1 = __importDefault(require("./utils"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(cookieParser())
app.use(utils_1.default.middlewares.credentials);
app.use(utils_1.default.middlewares.requestLogger);
app.get('/', (req, res) => {
    res.send(`Welcome to Viral's API!`);
});
// app.use(utils.middlewares.verifyJWT)
app.use('/database-managment', routers_1.default.database);
app.use(utils_1.default.middlewares.errorHandler);
app.use(utils_1.default.middlewares.unknownEndpoint);
exports.default = app;
