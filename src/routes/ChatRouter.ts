import express from 'express';
import { body } from 'express-validator';
import { generateChatResponse } from '../contoller/chatController';

export const router = express.Router();

router.post(
    '/getChat',
    [body('prompt').isString().withMessage('not a string')],
    generateChatResponse
);
