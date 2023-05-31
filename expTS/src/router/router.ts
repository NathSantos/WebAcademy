import { Router, Request, Response } from 'express'

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('bemvindo/:nome', (req, res) => {
    res.send(req.params.nome);
});

router.get('/page', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Define a rota raiz
router.get('/lorem', (req, res) => {                    
    res.sendFile(`${publicPath}/html/index.html`);
});

export default router;      // router é um middleware