//Variável = Parâmetros => Instrução
const outraSoma = (a, b) => {
    return a + b;
}
console.log(outraSoma(5,7))

//Variável = Parâmetros => Retorno 
const soma = (a, b) => a + b;
console.log(soma(2,3))

//IIFE Executa a função na hora
const maisUma = (() => 2 + 4)()
console.log(maisUma)

