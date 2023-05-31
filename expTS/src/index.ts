import express, { Request, Response } from 'express'
import { loremIpsum } from 'lorem-ipsum'
import validateEnv from './utils/validateEnv'
import dotenv from 'dotenv'
import logger from './middlewares/logger'
import router from './router/router'

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();
const publicPath = `${process.cwd()}/public`;

app.use(express.urlencoded({ extended: true }));    // Permite que o servidor interprete os dados enviados pelo formulário

app.use(logger('completo'));
app.use(router);

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));

app.use((req, res, next) => {
  console.log(`Requisição ${req.method} em ${req.url}`);
  next(); 
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
  console.log(`Servidor escutando na porta ${PORT}`);
});