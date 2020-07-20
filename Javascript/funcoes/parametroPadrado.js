//jshint esversion:6
'use strict';

//Existem 4 formas de estabelecer um parâmetro padrão dentro de uma função em javascript.

//Está é a forma mais enxuta para definir um parâmetro padrão para uma função
function UsandoAtribuicao(a = 1, b = 1){
    return a + b;
}

function UsandoArguments(a, b){
    a = !!arguments[0] ? a : 1;
    b = !!arguments[1] ? b : 1; 
    return a + b;
}

//Esta opção permite filtrar para ser utilizado apenas números!
function UsandoNaN(a, b){
    a = isNaN(a) ? 1 : a;
    b = isNaN(b) ? 1 : b;
    return a + b;
}

console.log(`Usando atribuição: ${UsandoAtribuicao()}`);
console.log(`Usando arguments: ${UsandoArguments()}`);
console.log(`Usando NaN: ${UsandoNaN()}`);


