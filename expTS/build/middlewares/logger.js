"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// Construindo um middleware
function logger(tipo) {
    const logPath = `${process.cwd()}/${process.env.LOGS}`;
    return (req, res, next) => {
        if (tipo === 'completo') {
            fs_1.default.writeFile(logPath, `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.error(err);
                }
            });
            next();
        }
        else {
            fs_1.default.writeFile(logPath, `${new Date().toISOString()} ${req.url} ${req.method}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.error(err);
                }
            });
            next();
        }
    };
}
exports.default = logger;
