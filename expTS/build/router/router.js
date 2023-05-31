"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const publicPath = `${process.cwd()}/public`;
router.get('bemvindo/:nome', (req, res) => {
    res.send(req.params.nome);
});
router.get('/page', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});
router.get('/', (req, res) => {
    res.send('Hello World!');
});
// Define a rota raiz
router.get('/lorem', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});
exports.default = router; // router é um middleware
