//jshint esversion:6
function sortear(min,max) {
    let numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

let opcao = 0;

//O do while executa o bloco de código ao menos uma única vez;
do{
    opcao = sortear(0,10);
    console.log(`Não foi desta vez, o resultado foi ${opcao}`);
}while(opcao != 0);