import { cleanEnv, port, str } from "envalid";

// Valida as variáveis de ambiente
const validateEnv = () => { 
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str()       // 'production' | 'development' | 'test'
    });
};

export default validateEnv;