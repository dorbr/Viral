"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const NODE_ENV = process.env.NODE_ENV;
const PORT = (process.env.PORT ? process.env.PORT : 4000);
const MONGODB_URI = (NODE_ENV === 'test' ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI);
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const PASSWORD_SALT = process.env.PASSWORD_SALT;
const COOKIE_CONFIG = {
    httpOnly: true,
    sameSite: 'none',
    secure: NODE_ENV === 'production' ? true : false,
    maxAge: 24 * 60 * 60 * 1000,
};
const CLEAR_COOKIE_CONFIG = {
    httpOnly: true,
    sameSite: 'none',
    secure: NODE_ENV === 'production' ? true : false,
};
const ALLOWED_ORIGINS = ['http://localhost:3000'];
const SERVICES_URLS = {
    analyzer: 'https://richaroo-analysis.onrender.com',
};
exports.default = {
    NODE_ENV,
    PORT,
    MONGODB_URI,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    PASSWORD_SALT,
    COOKIE_CONFIG,
    CLEAR_COOKIE_CONFIG,
    ALLOWED_ORIGINS,
    SERVICES_URLS,
};
