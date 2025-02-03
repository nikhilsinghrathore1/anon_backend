import { GoogleGenerativeAI } from '@google/generative-ai';
import { systemContent } from '../Prompts/PromptAO';

const apiKey = process.env.GEMINI_KEY;
if (!apiKey) {
    throw new Error('the api key not present');
}
const genAI = new GoogleGenerativeAI(apiKey);

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

export const chatSession = model.startChat({
    generationConfig,
    history: [],
});

export const GenAiCode = model.startChat({
    generationConfig: CodeGenerationConfig,
    systemInstruction: systemContent,
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
