const http = require("http");
const fs = require("fs");
const { createLink, createVoltar } = require("./utils");
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];    // array de string onde cada string é um parâmetro passado pelo terminal

const server = http.createServer((req, res) => {
    
    if(req.url == '/') {
        fs.readdir(folder, (err, files) => {
            if (err) console.log(err);
            else {
                res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
                files.forEach(f => res.write(`${createLink(f)}`));
                res.end();
            }
        });
    } 
    else {
        fs.readFile(`${folder}/${req.url}`, (err, content) => {
            res.write(createVoltar());
            res.end(content);
        });
    }
})

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT} ...`);
})