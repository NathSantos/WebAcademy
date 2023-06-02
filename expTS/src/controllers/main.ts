import { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

const index = (req: Request, res: Response) => {
    res.send('Hello World!');
}

const bemvindo = (req: Request, res: Response) => {
    res.send(req.params.nome);
}

const page = (req: Request, res: Response) => {
    res.sendFile(`${publicPath}/html/index.html`);
}

const lorem = (req: Request, res: Response) => {                    
    res.sendFile(`${publicPath}/html/index.html`);
}

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!'
    });
}

const hb2 = (req: Request, res: Response) => {
    const profs = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('main/hb2', { profs });
}

const hb3 = (req: Request, res: Response) => {
    res.render('main/hb3', {
        nome: 'Express',
        tipo: 'framework',
        poweredByNodejs: true
    });
}

const hb4 = function (req: Request, res: Response) {
    const profs = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('main/hb4', { profs });
}

const hb5 = function (req: Request, res: Response) {
    const technologies = [
        { nome: 'Express', tipo: 'Framework', poweredByNodejs: true },
        { nome: 'Laravel', tipo: 'Framework', poweredByNodejs: false },
        { nome: 'React', tipo: 'Library', poweredByNodejs: true },
        { nome: 'Handlebars', tipo: 'Engine View', poweredByNodejs: true },
        { nome: 'Django', tipo: 'Framework', poweredByNodejs: false },
        { nome: 'Docker', tipo: 'Virtualization', poweredByNodejs: false },
        { nome: 'Sequelize', tipo: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb5', { technologies });
}

export default { bemvindo, page, index, lorem, hb1, hb2, hb3, hb4, hb5};