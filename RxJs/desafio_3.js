const numeros = [0, 1, 2, 3]

Array.prototype.reduzir = function (fn){
    let acumulador = this[0];
    for(let i = 0; i < numeros.length; i++){
        acumulador = fn(acumulador,this[i])
    }
    return acumulador;
}

const soma = numeros.reduzir((prvNumero, crrNumero) => prvNumero + crrNumero);
console.log(soma)