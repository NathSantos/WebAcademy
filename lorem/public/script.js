document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const numParagraphs = document.querySelector('#numParagraphs').value;   // Extrai o número de parágrafos do formulário

    fetch('/generate', {                                                    // Envia o número de parágrafos para a rota /generate
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `numParagraphs=${numParagraphs}`
    })
    .then(response => response.text())                                      // Extrai o texto da resposta
    .then(result => {
        document.querySelector('#result').innerHTML = result;               // Insere o texto na página
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
  