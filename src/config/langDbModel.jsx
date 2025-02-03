import { OpenAI } from 'openai';
const apiBase = 'https://api.us-east-1.langdb.ai';
const apiKey =
    'langdb_NllPcEVOc3VmdTFHK0xscVJOVWRSMWdLMmNKVUpjblJQSGZ3elJBcGRaTHpOcmRWaU9EakdHSEdGTUY3YVYrT2xXMVJPODdUUmtLSi9YTzdOVzNQUW52b29idnFCY1lzejBtTUF0UXZIVEc5Vno3SWRua0RiQ1ZPOXErVzZrUzFqMTFXRmdUekJEUTdUSitLY0l6SjlobjRnbGR1WlcvNERWeWhMcTJ0KzVZZ0wzTHluMlhZTkpHUnZHditSN29kU0Mwcm1nPT06QUFBQUFBQUFBQUFBQUFBQQ=='; // Replace with your LangDB token
const defaultHeaders = {
    'x-project-id': 'efcd1195-bdfd-419f-9027-2ed6906327f7',
};

const client = new OpenAI({
    baseURL: apiBase,
    apiKey: apiKey,
});

const messages = [
    {
        role: 'system',
        content: '',
    },
    { role: 'user', content: 'What are the earnings of Apple in 2022?' },
];

async function getAssistantReply() {
    const response = await client.chat.completions.create(
        {
            model: 'gpt-4o-mini', // Use the model
            messages,
        },
        { headers: defaultHeaders }
    );
    const assistantReply = response.choices[0].message.content;
    console.log('Assistant:', assistantReply);
}
getAssistantReply();
