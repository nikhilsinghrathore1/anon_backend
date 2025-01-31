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
exports.getAiChatResp = void 0;
const AiModel_1 = require("../config/AiModel");
const getAiChatResp = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    if (prompt) {
        const PROMPT = JSON.stringify(prompt);
        console.log(PROMPT);
        const response = yield AiModel_1.chatSession.sendMessage(PROMPT);
        const resp = response.response.text();
        return resp;
    }
});
exports.getAiChatResp = getAiChatResp;
