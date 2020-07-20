//jshint esversion:6
//BREAK e CONTINUE não são recomendados, deve-se utilizar funções para ter uma legibilidade melhor do código.
'use strict';

const num = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

//Utilizando break o laço de repetição é interrompido no momento em a linha é lida.
console.log('BREAK');
for(let i in num){
    if(num[i] == 5) break;
    console.log(`${i} = ${num[i]}`);
}

console.log('CONTINUE');
for(let i in num){
    if(num[i] == 5) continue;
    console.log(`${i} = ${num[i]}`);
}

//Também é possível utilizar rótulos para controlar laços de repetição mais externos dentro de estruturas internas

console.log('Rótulos');
lacoexterno:for(let a in num){
    for(let b in num){
        console.log(a,b);
        if(a == 5) break lacoexterno;
    }
}