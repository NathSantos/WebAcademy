"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lorem_ipsum_1 = require("lorem-ipsum");
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const router_1 = __importDefault(require("./router/router"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
const app = (0, express_1.default)();
const publicPath = `${process.cwd()}/public`;
app.use(express_1.default.urlencoded({ extended: true })); // Permite que o servidor interprete os dados enviados pelo formulário
app.use((0, logger_1.default)('completo'));
app.use(router_1.default);
app.use('/css', express_1.default.static(`${publicPath}/css`));
app.use('/js', express_1.default.static(`${publicPath}/js`));
app.use((req, res, next) => {
    console.log(`Requisição ${req.method} em ${req.url}`);
    next();
});
// Define a rota /generate => POST (formulário)
app.post('/generate', (req, res) => {
    const { numParagraphs } = req.body; // Extrai o número de parágrafos do corpo da requisição
    if (!numParagraphs || isNaN(numParagraphs)) { // Se o número de parágrafos não foi enviado ou não é um número
        res.status(400).send('Número inválido de parágrafos.');
        return;
    }
    const paragraphs = (0, lorem_ipsum_1.loremIpsum)({
        count: parseInt(numParagraphs),
        units: 'paragraphs',
        format: 'html',
    });
    res.send(paragraphs); // Envia os parágrafos como resposta
});
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
