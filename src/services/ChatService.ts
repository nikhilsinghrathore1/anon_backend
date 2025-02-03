import { chatSession } from '../config/AiModel';

interface val {
    role: string;
    content: string;
}

export const getAiChatResp = async (prompt: val) => {
    if (prompt) {
        return await chatSession
            .sendMessage(prompt.content)
            .then((response) => response.response.text());
    }
};
