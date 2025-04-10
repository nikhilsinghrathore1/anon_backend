import { Request,Response } from "express"
import { validationResult } from "express-validator"
import { getAiCode } from "../services/CodeGenService"
import { AoPrompt } from "../data"

export const GetGenCode = async(req:Request,res:Response) =>{
               console.log("get gen code called")

                              const error = validationResult(req) 
                              if(!error.isEmpty()){
                                             res.status(400).json({
                                                            msg:"some error occured",
                                                            err:error
                                             })
                              }
                              try{
                                             const{prompt} = req.body
                                             console.log(prompt)
                                             
                                             const resp = await getAiCode(prompt+AoPrompt)
                                             console.log(resp)
                                             res.status(200).json({
                                                            resp
                              })

                              }catch(err){
                                             res.status(400).json({
                                                            msg:"try block failed",
                                                            err                                                            
                                             })
                              }
}
