//jshint esversion:10
'use strict';

//Uma função factory é uma fábrica de objetos, com ela posso definir novos objetos ou funções.

function criaProduto(marca, preco, qtd){
    const desconto = 10;
    return {
        marca,
        preco : preco - (preco * desconto) /100,
        qtd,
        desconto
    };
}

const leiteEmPo = criaProduto('Ninho', 7.50, 12);

console.table(leiteEmPo);