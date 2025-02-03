'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.router = void 0;
const express_1 = __importDefault(require('express'));
const express_validator_1 = require('express-validator');
const GenCodeController_1 = require('../contoller/GenCodeController');
exports.router = express_1.default.Router();
exports.router.post(
    '/genCode',
    [
        (0, express_validator_1.body)('prompt')
            .isString()
            .withMessage('not a string'),
    ],
    GenCodeController_1.GetGenCode
);
