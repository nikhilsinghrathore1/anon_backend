"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenAiCode = exports.chatSession = void 0;
const generative_ai_1 = require("@google/generative-ai");
const PromptAO_1 = require("../Prompts/PromptAO");
const apiKey = process.env.GEMINI_KEY;
if (!apiKey) {
    throw new Error('the api key not present');
}
const genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash-exp',
});
const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
};
const CodeGenerationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'application/json',
};
exports.chatSession = model.startChat({
    generationConfig,
    history: [],
});
exports.GenAiCode = model.startChat({
    generationConfig: CodeGenerationConfig,
    systemInstruction: PromptAO_1.systemContent,
    history: [
    // {
    //     role: 'user',
    //     parts: [
    //         {
    //             text: '',
    //         },
    //     ],
    // },
    ],
});
//  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//  console.log(result.response.text());
