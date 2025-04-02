"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const ChatRouter_1 = require("./routes/ChatRouter");
const CodeGenRouter_1 = require("./routes/CodeGenRouter");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("server working");
});
app.use('/chat', ChatRouter_1.router);
app.use('/code', CodeGenRouter_1.router);
app.listen(port, () => {
    console.log("server started on port ", port);
});
