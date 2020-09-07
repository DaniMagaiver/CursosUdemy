const { resolve } = require("path");
const { rejects } = require("assert");
const { error } = require("console");

const estaFuncaoGeraErro = function(){
    return new Promise((resolve, rejects) =>{
        const resultado =  parseInt(Math.random() * 10);
        if(resultado > 5){
            rejects(`Erro: ${resultado}`)
        } else {
            resolve(`Deu certo: ${resultado}`)
        }
    })
}

estaFuncaoGeraErro()
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))