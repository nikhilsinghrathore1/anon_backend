import { GenAiCode, sanitizeAndParseJSON } from "../config/AiModel";
import { AoPrompt } from "../data";

export const getAiCode = async (prompt: string) => {
  if (!prompt) {
    throw new Error("all fields are required");
  }
  try {
    const result = await GenAiCode.sendMessage(prompt + AoPrompt);
    console.log(result.response.text())
    const res = sanitizeAndParseJSON(result.response.text());
    return res;
  } catch (err) {
    throw err;
  }
};
