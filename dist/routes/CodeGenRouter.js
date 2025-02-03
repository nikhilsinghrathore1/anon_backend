"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const GenCodeController_1 = require("../contoller/GenCodeController");
exports.router = express_1.default.Router();
exports.router.post('/genCode', [
    (0, express_validator_1.body)('prompt').isObject().withMessage('prompt should be an object'), // Ensure 'prompt' is an object
    (0, express_validator_1.body)('prompt.content').isString().withMessage('content must be a string'), // Ensure 'content' is a string
], GenCodeController_1.GetGenCode);
