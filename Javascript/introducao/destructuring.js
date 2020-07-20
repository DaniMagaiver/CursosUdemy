//jshint esversion: 6

const pessoa = {
    nome: 'Danilo',
    sobrenome: 'Silva Fernandes',
    endereco: {
        rua: 'Vereador Fortunato Arnoni',
        numero: '132',
        bairro: 'Jd. Caçula'
    }
};

//Para utilizar o destructuring utilizo utilizo let ou const seguido de {}.
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);

//Posso desetruturar um objeto em variaveis usando :
const {nome: n, sobrenome: i} = pessoa;
console.log(n,i);

//Podemos desestruturar variaveis dentro de variaveis
const {endereco: {rua,numero, cep}} = pessoa;
console.log(rua, numero, cep);

let {endereco:{bairro}} = pessoa;

console.log(bairro);