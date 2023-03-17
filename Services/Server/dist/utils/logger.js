"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = {
    info: {
        all: (...params) => console.log(...params),
        limited: (...params) => {
            if (!isProductionEnvironment())
                console.log(...params);
        },
        dev: (...params) => {
            if (isDevelopmentEnvironment())
                console.log(...params);
        },
        test: (...params) => {
            if (isTestingEnvironment())
                console.log(...params);
        },
        prod: (...params) => {
            if (isProductionEnvironment())
                console.log(...params);
        },
    },
    warn: {
        all: (...params) => console.warn(...params),
        limited: (...params) => {
            if (!isProductionEnvironment())
                console.warn(...params);
        },
        dev: (...params) => {
            if (isDevelopmentEnvironment())
                console.warn(...params);
        },
        test: (...params) => {
            if (isTestingEnvironment())
                console.warn(...params);
        },
        prod: (...params) => {
            if (isProductionEnvironment())
                console.warn(...params);
        },
    },
    error: {
        all: (...params) => console.error(...params),
        limited: (...params) => {
            if (!isProductionEnvironment())
                console.error(...params);
        },
        dev: (...params) => {
            if (isDevelopmentEnvironment())
                console.error(...params);
        },
        test: (...params) => {
            if (isTestingEnvironment())
                console.error(...params);
        },
        prod: (...params) => {
            if (isProductionEnvironment())
                console.error(...params);
        },
    },
};
const isDevelopmentEnvironment = () => process.env.NODE_ENV === 'DEVELOPMENT';
const isTestingEnvironment = () => process.env.NODE_ENV === 'TESTING';
const isProductionEnvironment = () => process.env.NODE_ENV === 'PRODUCTION';
exports.default = logger;
