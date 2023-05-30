import { Request, Response, NextFunction } from 'express'
import { Tipo } from './loggerTypes'
import fs from 'fs'

// Construindo um middleware

function logger(tipo: Tipo) {

    const logPath = `${process.cwd()}/${process.env.LOGS}`;

    return (req: Request, res: Response, next: NextFunction) => {
        if(tipo === 'completo') {
            fs.writeFile(logPath, `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}\n`, { flag: 'a' }, (err) => {
                if(err) {
                    console.error(err);
                }
            });
            next();
        } else {
            fs.writeFile(logPath, `${new Date().toISOString()} ${req.url} ${req.method}\n`, { flag: 'a' }, (err) => {
                if(err) {
                    console.error(err);
                }
            });
            next();
        }
    }
}

export default logger;