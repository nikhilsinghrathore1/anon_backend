"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGenCode = void 0;
const express_validator_1 = require("express-validator");
const CodeGenService_1 = require("../services/CodeGenService");
const data_1 = require("../data");
const GetGenCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const error = (0, express_validator_1.validationResult)(req);
    if (!error.isEmpty()) {
        res.status(400).json({
            msg: "some error occured",
            err: error
        });
    }
    try {
        const { prompt } = req.body;
        const resp = yield (0, CodeGenService_1.getAiCode)(prompt + data_1.AoPrompt);
        console.log(resp);
        res.status(200).json({
            resp
        });
    }
    catch (err) {
        res.status(400).json({
            msg: "try block failed",
            err
        });
    }
});
exports.GetGenCode = GetGenCode;
