//Uma arrow function NÃO PODE ser usada como função construtora desta forma.
'use strict';

function Pessoa(nome){
    this.nome = nome;

    this.mostraNome = function(){
        console.log(this.nome);
    }.bind(this); //Neste caso podemos utilizar o bind para amarrar o this ao contexto interno da função
}

//Mas pode ser utilizada desta

const outraPessoa = (nome) => {
    //Estou retornando um objeto aqui
    return{
        nome,
        mostraNome(){
            console.log(this.nome);
        }
    }
}

const Pessoa1 = new Pessoa("Vanessa");
Pessoa1.mostraNome();

const Pessoa2 = outraPessoa("Carla");
Pessoa2.mostraNome();