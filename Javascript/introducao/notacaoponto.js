//jshint esversion: 6

//A notação ponto permite acessar os objetos dentro de uma função, utilizando this.nomedoatributo deixamos ele público dentro da função.

// console.log(Math.ceil(6.1));

// const obj1 = {};
// obj1.nome = 'Bola';
// obj1['telefone'] = '1148233771';
// console.log(`${obj1.nome} e ${obj1.telefone}`);

// function Obj(nome){
//     this.nome = nome;
// }

// const obj2 = new Obj('cadeira'); //Para acessar o atributo publico de uma função é necessário instanciá-la

/*Instanciar um objeto é criá-lo de fato, quando defino um objeto defino apenas a sua ideia (como nas classes em javascript), portanto instanciar é definir o conteúdo deste objeto. Quando defino um objeto dentro de uma função, mas não o defino o retorno é undefined*/
// const obj3 = new Obj('mesa');

// console.log(obj2.nome);
// console.log(obj3.nome);

//CALCULADORA

function calc(valor1,valor2){ //criamos o objeto com os métodos soma, subtracao, multiplicacao e divisão
    this.soma = function(){
        let resultado = valor1 + valor2;
        return resultado;
    };
    this.subtracao = function(){
        let resultado = valor1 - valor2;
        return resultado;
    };
    this.multiplicacao = function(){
        let resultado = valor1 * valor2;
        return resultado;
    };
    this.divisao = function(){
        let resultado = valor1 / valor2;
        return resultado;
    };
}

const calc1 = new calc(1,4); //Criamos uma nova instância de calc

console.log(`Os resultados do cálculo são:
    - Soma: ${calc1.soma()};
    - Subtracao: ${calc1.subtracao()};
    - Multiplicacao: ${calc1.multiplicacao()};
    - Divisão: ${calc1.divisao()};
`);

console.log(`Os tipos de variáveis que temos aqui são:
    calc = ${typeof calc};
    calc.soma = ${typeof calc.soma};
    calc1 = ${typeof calc1};
    calc1.soma = ${typeof calc1.soma}

    É interessante notar que o atributo calc só passa
    a existir dentro de uma instância, neste caso
    calc1. Quando criamos uma classe, então criamos a ideia
    e quando a instanciando criamos definimos um objeto em
    particular que conterá os atributos dessa ideia.
`);