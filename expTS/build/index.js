"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const app = (0, express_1.default)();
app.use((0, logger_1.default)('completo'));
app.use((req, res, next) => {
    console.log(`Requisição ${req.method} em ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
