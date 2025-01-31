import { Request,Response } from "express"
import { validationResult } from "express-validator"
import { getAiChatResp } from "../services/ChatService";
export const generateChatResponse =async(req:Request,res:Response)=>{
               const error = validationResult(req) ;
               if(!error.isEmpty()){
                              res.status(400).json({
                                             msg:'something is wrong buddy',
                                             error
                              })
                              return ; 
               }

               // fuck bhai chal gya ye toh fuck 
               try{

                              const {prompt} = req.body
                              console.log("this is the prompt we getting ",prompt)
                              const AiChatResp = await getAiChatResp(prompt) 
                              res.status(200).json({
                                             res :AiChatResp
                              })


               }catch(err){
                              res.status(400).json({
                                             msg:"caught error in the gen_chat_route",
                                             err
                              })
                              return ;
               }
}