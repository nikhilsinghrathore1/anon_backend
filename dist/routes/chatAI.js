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
const ollama_1 = require("ollama");
const ChatRouter_1 = require("./ChatRouter");
const ollama = new ollama_1.Ollama({ host: 'http://127.0.0.1:11434' });
ChatRouter_1.router.get('/ollama', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield ollama.chat({
        model: 'qwen2.5-coder:latest',
        messages: [
            { role: 'system', content: 'sky is blue always' },
            { role: 'user', content: 'what is the color of sky?' }
        ],
    });
    console.log(response.message.content);
    res.send(response.message.content);
}));
