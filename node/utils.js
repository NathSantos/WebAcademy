function toUpper(str) {
    return str.toUpperCase();
}

function createLink(filename) {
    return `<a href="${filename}">${filename}</a><br>\n`;
}

function createVoltar() {
    return `<a href="/">Voltar</a><br>\n`;
}

// Exportando módulos ou funções que criei
module.exports = {
    toUpper, createLink, createVoltar
}