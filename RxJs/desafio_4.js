const fs = require('fs');
const path = require('path');

const caminhoArquivo = function(caminho){
    return new Promise(resolve => {
        resolve(path.join(__dirname, caminho))
    })
}

caminhoArquivo('dados.txt')
.then(caminho => fs.readFileSync(caminho, {encoding:'utf8'}))
.then(console.log)