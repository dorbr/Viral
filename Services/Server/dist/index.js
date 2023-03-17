"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const utils_1 = require("./utils");
const database_1 = __importDefault(require("./controllers/database"));
const initializeServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.initalizeConnection();
        app_1.default.listen({ port: utils_1.config.PORT }, () => utils_1.logger.info.all(`🚀 Server ready at http://localhost:${utils_1.config.PORT}`));
    }
    catch (error) {
        utils_1.logger.error.all(error);
    }
});
