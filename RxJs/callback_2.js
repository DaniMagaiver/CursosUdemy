const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

console.log('inicio assíncrono')

fs.readFile(caminho, (_, data)=>{
    console.log(data.toString());
})

console.log('fim assíncrono')

console.log('inicio síncrono')

const arquivo = fs.readFileSync(caminho)

console.log(arquivo.toString())

console.log('fim síncrono');