import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getAiChatResp } from '../services/ChatService';

export const generateChatResponse = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({
            msg: 'something is wrong buddy',
            error,
        });
        return;
    }

    // fuck bhai chal gya ye toh fuck
    try {
        const { prompt } = (await req.body) as {
            prompt: string;
        };
        const parsedPrompt = await JSON.parse(prompt);
        const extractedLatestUserPrompt =
            await parsedPrompt[parsedPrompt.length - 1];

        const response = await getAiChatResp(extractedLatestUserPrompt);

        console.log('\nChatController response from AI:\n', response);

        res.status(200).json({ response });
    } catch (err) {
        res.status(400).json({
            msg: 'caught error in the gen_chat_route',
            err,
        });
        return;
    }
};
