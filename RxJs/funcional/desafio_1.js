//Passando funções como parâmetro

function somar(numeroA){
    return function(numeroB){
        return function(numeroC){
            return numeroA + numeroB + numeroC
        }
    }
}

const soma = somar(2)(3)(5)
console.log(soma)

function calcular(numeroA){
    return function(numeroB){
        return function(fn){
            return fn(numeroA, numeroB)
        }
    }
}

console.log(calcular(2)(3)((a, b) => a + b))
console.log(calcular(2)(3)((a, b) => a - b))
console.log(calcular(2)(3)((a, b) => a * b))