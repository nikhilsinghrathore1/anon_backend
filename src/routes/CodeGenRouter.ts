import express from 'express';
import { body } from 'express-validator';
import { GetGenCode } from '../contoller/GenCodeController';

export const router = express.Router();

router.post(
    '/genCode',
    [
        body('prompt').isObject().withMessage('prompt should be an object'),  // Ensure 'prompt' is an object
        body('prompt.content').isString().withMessage('content must be a string'), // Ensure 'content' is a string
    ],
    GetGenCode
);
