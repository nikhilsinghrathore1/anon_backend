'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.router = void 0;
const express_1 = __importDefault(require('express'));
const ollama_1 = require('ollama');
const openai_1 = __importDefault(require('openai'));
exports.router = express_1.default.Router();
const ollama = new ollama_1.Ollama({ host: 'http://127.0.0.1:11434' });
const client = new openai_1.default({
    baseURL: 'http://localhost:11434/v1/',
    apiKey: 'ollama',
});
exports.router.get('/ollama', (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const response = yield ollama.chat({
            model: 'qwen2.5-coder:latest',
            messages: [
                { role: 'system', content: 'sky is blue always' },
                { role: 'user', content: 'what is the color of sky?' },
            ],
        });
        // console.log(response.message.content);
        function chat() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield ollama.chat({
                    model: 'qwen2.5-coder:latest',
                    messages: [
                        { role: 'system', content: 'sky is blue always' },
                        { role: 'user', content: 'what is the color of sky?' },
                    ],
                });
                console.log(response.message.content);
                res.json(response.message.content);
            });
        }
        // await chat();
        function main() {
            return __awaiter(this, void 0, void 0, function* () {
                const chatCompletion = yield client.chat.completions.create({
                    messages: [
                        // { role: 'system', content: systemInstruction },
                        {
                            role: 'user',
                            content:
                                'Write a lua arweave handler and its corresponsing react code to interact with it on arweave ao chain',
                        },
                    ],
                    model: 'qwen2.5-coder:latest',
                });
                res.send(chatCompletion);
            });
        }
        // await main();
    })
);
