import express from "express"
import { Ollama } from "ollama";
import OpenAI from "openai";
export const router = express.Router()

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });
const client = new OpenAI({
    baseURL: 'http://localhost:11434/v1/',
    apiKey: 'ollama'
});

router.get('/ollama', async (req, res) => {
    const response = await ollama.chat({
        model: 'qwen2.5-coder:latest',
        messages: [
            { role: 'system', content: 'sky is blue always' },
            { role: 'user', content: 'what is the color of sky?' }
        ],
    });
    // console.log(response.message.content);

    async function chat() {
        const response = await ollama.chat({
            model: 'qwen2.5-coder:latest',
            messages: [
                { role: 'system', content: 'sky is blue always' },
                { role: 'user', content: 'what is the color of sky?' }
            ],
        });
        console.log(response.message.content);
        res.json(response.message.content);
    }
    // await chat();

    async function main() {
        const chatCompletion = await client.chat.completions.create({
            messages: [
                // { role: 'system', content: systemInstruction },
                { role: 'user', content: 'Write a lua arweave handler and its corresponsing react code to interact with it on arweave ao chain' }
            ],
            model: 'qwen2.5-coder:latest',
        });
        res.send(chatCompletion);
    }
    // await main();
});