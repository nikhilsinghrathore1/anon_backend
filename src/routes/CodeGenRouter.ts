import express from "express"
import { body } from "express-validator"
import { GetGenCode } from "../contoller/GenCodeController"

export const router = express.Router()


router.post("/genCode",[
               body("prompt").isString().withMessage("not a string")
],GetGenCode)