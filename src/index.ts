import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';

import { router as ChatRouter } from './routes/ChatRouter';
import { router as CodeGenRouter } from './routes/CodeGenRouter';

const app: Application = express();

const port = process.env.PORT || 5000;

const corsOptions = {
    origin: 'https://anon-v2.vercel.app', // Specify your frontend URL here
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'], // Adjust if necessary
};
app.use(cors(corsOptions));
app.use(cookieparser());
app.use(express.json());
app.use('/chat', ChatRouter);
app.use('/code', CodeGenRouter);

app.listen(port, () => {
    console.log('server started on port ', port);
});
