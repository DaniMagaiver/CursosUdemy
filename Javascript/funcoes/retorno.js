//jshint esversion:6
'use strict';

//Uma função pode ter retornos diferentes de acordo com seu parâmetro passado, no entanto é preciso ter cuidado ao utilizar este recurso da linguagem.

function RetornoDepende(largura, altura){
    const area = largura * altura;
    if(area > 20) console.log('Área maior que o permitido');
    else return area;
}

console.log(RetornoDepende(2, 2));
console.log(RetornoDepende(2));
console.log(RetornoDepende(5,5));

//Mesmo que eu não especifique um retorno a função irá retornar undefined.

