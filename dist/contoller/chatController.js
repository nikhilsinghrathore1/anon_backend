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
exports.generateChatResponse = void 0;
const express_validator_1 = require("express-validator");
const ChatService_1 = require("../services/ChatService");
const generateChatResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        res.status(400).json({
            msg: 'something is wrong buddy',
            error
        });
        return;
    }
    // fuck bhai chal gya ye toh fuck 
    try {
        const { prompt } = req.body;
        console.log("this is the prompt we getting ", prompt);
        const AiChatResp = yield (0, ChatService_1.getAiChatResp)(prompt);
        res.status(200).json({
            res: AiChatResp
        });
    }
    catch (err) {
        res.status(400).json({
            msg: "caught error in the gen_chat_route",
            err
        });
        return;
    }
});
exports.generateChatResponse = generateChatResponse;
