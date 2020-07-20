//jshint esversion:10
//Funções construtoras permitem a criação de classes, não é possível fazer funções construtoras com arrow functions.

"use strict";
function Carro(velocidadeMaxima = 200, aceleracao = 5){
    let velocidadeAtual;
    this.acelerar = () =>{
        if((velocidadeAtual + aceleracao) < velocidadeMaxima){
            velocidadeAtual = velocidadeAtual + aceleracao;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    };

    this.getVelocidadeAtual = () => {
        return velocidadeAtual;
    };
};

const gol = new Carro();

gol.acelerar();
console.log(gol.getVelocidadeAtual());