//jshint esversion:6
'use strict';
const objeto = {
    olhos : 'verdes',
    cabelos : 'castanhos',
    altura : '1.70' 
};

//Posso percorrer todos os atributos de um array utilizando for in e [nomeDoAtributo]
for(let atributo in objeto){
    console.log(`${atributo} = ${objeto[atributo]}`);
}

//Posso utilizar o for in também caso necessite utilizar o index
const array = ['olhos escuros','cabelo preto', '1.62'];

for(let i in array){
    console.log(array[i]);
}