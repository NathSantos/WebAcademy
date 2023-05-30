import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import logger from './middlewares/logger'

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3333;
const app = express();

app.use(logger('completo'));

app.use((req, res, next) => {
  console.log(`Requisição ${req.method} em ${req.url}`);
  next(); 
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
