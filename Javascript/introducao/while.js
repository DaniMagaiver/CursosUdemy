//jshint esversion:6
function sortear(min,max) {
    let numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

let opcao = 0;
while(opcao != 5){
    opcao = sortear(1,10);
    console.log(`Não foi desta vez, o resultado foi ${opcao}`);
}