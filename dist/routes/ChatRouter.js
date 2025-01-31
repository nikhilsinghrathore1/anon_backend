"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const chatController_1 = require("../contoller/chatController");
exports.router = express_1.default.Router();
exports.router.post("/getChat", [
    (0, express_validator_1.body)("prompt").isString().withMessage("not a string")
], chatController_1.generateChatResponse);
