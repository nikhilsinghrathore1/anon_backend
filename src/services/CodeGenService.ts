import { GenAiCode } from "../config/AiModel";
import { AoPrompt } from "../data";

export const getAiCode = async(prompt:string)=>{
               if(!prompt){
                              throw new Error("all fields are required")
               }
               try{
                              const result =await GenAiCode.sendMessage(prompt + AoPrompt)
                              const res = result.response.text()
                              return JSON.parse(res)
               }catch(err){
                              throw err
               }
}