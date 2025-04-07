import { chatSession } from "../config/AiModel";
import ChatPrompt from "../Prompts/ChatPrompt";

export const getAiChatResp = async (prompt:string) => {
  if (prompt) {
    const PROMPT = JSON.stringify(prompt);
    console.log(PROMPT);
    const response = await chatSession.sendMessage(PROMPT + ChatPrompt);
    const resp = response.response.text();
    return resp;
  }
};
