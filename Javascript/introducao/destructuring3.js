//jshint esversion:6

function rand({min = 0, max = 1000}){
    const random = Math.random();
    const subtracao = max - min;
    const multiplicacao = subtracao * random;
    const adicao = multiplicacao + min;
    const arrendondamento = Math.floor(adicao);
    console.log(`
    -------Gerar números em intervalo-------
    1º gera-se um numero: ${random}
    2º ${min}(min) - ${max}(max) = ${subtracao}
    3º ${subtracao} * ${random}: ${multiplicacao}
    4º ${multiplicacao} + ${min}: ${adicao}
    5º arredonda-se: ${arrendondamento}
    `);
}


rand({min:5, max: 10});