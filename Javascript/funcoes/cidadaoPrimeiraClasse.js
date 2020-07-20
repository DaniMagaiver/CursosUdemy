//jshint esversion:6
'use strict';

//A funcao pode ser trabalhada como dado, o que permite manipulá-la como um dados

//Uma função pode ser armazenada dentro de uma variavel.
const funcao = function (){ return 1 + 4;};
console.log(funcao()); //Sempre usar () para executar a funcao

//Posso inserir uma funcao em um array e invocá-la
const array = [function (){console.log('Dentro de um array');}, 'texto'];

array[0]();

//Posso inserir um funcao em um objeto

const objeto = {
    funcao : function(){
        console.log('Dentro de um objeto');
    }
};

objeto.funcao();

//Posso inserir uma função dentro de outra função e até mesmo retorná-la;

function funcao1(a){
    return function funcao2(b){
        return a + b;
    };
}

console.log(funcao1(1)(2));

