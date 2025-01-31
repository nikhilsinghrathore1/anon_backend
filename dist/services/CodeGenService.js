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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAiCode = void 0;
const AiModel_1 = require("../config/AiModel");
const getAiCode = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    if (!prompt) {
        throw new Error("all fields are required");
    }
    try {
        const result = yield AiModel_1.GenAiCode.sendMessage(prompt);
        const res = result.response.text();
        return JSON.parse(res);
    }
    catch (err) {
        throw err;
    }
});
exports.getAiCode = getAiCode;
