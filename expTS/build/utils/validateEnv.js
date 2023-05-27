"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
// Valida as variáveis de ambiente
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        PORT: (0, envalid_1.port)(),
        NODE_ENV: (0, envalid_1.str)() // 'production' | 'development' | 'test'
    });
};
exports.default = validateEnv;
