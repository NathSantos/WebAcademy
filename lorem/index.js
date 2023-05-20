const express = require('express');
const { loremIpsum } = require('lorem-ipsum');
const fs = require('fs/promises');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));                  // Define a pasta public como a pasta raiz do servidor
app.use(express.urlencoded({ extended: true }));    // Permite que o servidor interprete os dados enviados pelo formulário

// Define a rota raiz
app.get('/', (req, res) => {                    
    fs.readFile('public/index.html', 'utf-8')       // Lê o arquivo index.html
    .then((content) => {                            // Envia o conteúdo do arquivo como resposta
        res.send(content);
    })
    .catch((error) => {
        res.status(500).send('Erro ao carregar o arquivo HTML.');
    });
});

// Define a rota /generate => POST (formulário)
app.post('/generate', (req, res) => {            
    const { numParagraphs } = req.body;             // Extrai o número de parágrafos do corpo da requisição

    if (!numParagraphs || isNaN(numParagraphs)) {   // Se o número de parágrafos não foi enviado ou não é um número
        res.status(400).send('Número inválido de parágrafos.');
        return;
    }

    const paragraphs = loremIpsum({                 // Gera os parágrafos com a biblioteca lorem-ipsum
        count: parseInt(numParagraphs),
        units: 'paragraphs',
        format: 'html',
    });

    res.send(paragraphs);                           // Envia os parágrafos como resposta
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
