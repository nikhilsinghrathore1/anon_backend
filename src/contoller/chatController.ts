import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { getAiChatResp } from "../services/ChatService";
import { cleaningText, sanitizeAndParseJSON } from "../config/AiModel";
export const generateChatResponse = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({
      msg: "something is wrong buddy",
      error,
    });
    return;
  }

  // fuck bhai chal gya ye toh fuck
  try {
    const { prompt } = req.body;
    console.log("this is the prompt we getting ", prompt);
    const AiChatResp = await getAiChatResp(
      prompt +
        "you should only return a text which tells about the details of how to build this also don't use more than 30 words also make sure that you reply like an ai assistant who is helping me create this project also don't use underlines and brackets and no need to mention the technology used just give a info msg"
    );
    const response = cleaningText(AiChatResp!);
    console.log(response);
    res.status(200).json({
      res: response,
    });
  } catch (err) {
    res.status(400).json({
      msg: "caught error in the gen_chat_route",
      err,
    });
    return;
  }
};
