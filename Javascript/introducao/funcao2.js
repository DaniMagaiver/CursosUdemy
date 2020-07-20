// Armazenando uma função em uma variável

const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variável

const soma = (a,b) => { //O arrow substitui o nome function
    return a + b
}

console.log(soma(2,5))

//Retorno implicito

const subtracao = (a, b) => a - b //Serve para funções com uma única linha
console.log(subtracao(7,2))

const potenciaQuadrada = a => a ** 2  //Serve para funções com um único parâmetro
console.log(potenciaQuadrada(2))