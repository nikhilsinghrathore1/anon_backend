import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getAiCode } from '../services/CodeGenService';

export const GetGenCode = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({
            msg: 'some error occured',
            err: error,
        });
    }
    try {
        console.log('inside GenCodeController');
        const { prompt } = (await req.body) as {
            prompt: {
                role: string;
                content: string;
            };
        };
        console.log('\n prompt recieved', prompt);
        prompt.content = prompt.content.split('And Remember')[0].trim();

        console.log(prompt);
        const response = await getAiCode(prompt.content);

        res.status(200).json({
            response,
        });
        return;
    } catch (err) {
        res.status(400).json({
            msg: 'try block failed in GenCodeController',
            err,
        });
    }
};
