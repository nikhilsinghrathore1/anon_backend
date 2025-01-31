import { chatSession } from "../config/AiModel"
import ChatPrompt from "../Prompts/ChatPrompt"

interface val {
               role:string,
               content:string
}

export const getAiChatResp = async(prompt:val)=>{
               if(prompt){
                              const PROMPT = JSON.stringify(prompt)
                              console.log(PROMPT)
                              const response = await chatSession.sendMessage(PROMPT)        
                              const resp = response.response.text()
                              return resp
               }
       
}