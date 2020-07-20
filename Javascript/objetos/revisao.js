//jshint esversion:8

//Posso criar um objeto utilizando uma função construtora.
let objeto = new Object;

//Posso criar atributos dinamicamente
objeto.nome = 'Uma cadeira';

//Posso até acessar propriedades que não existem, o que retornará undefined.
console.log(objeto.valor);

//No entanto, não posso acessar propriedades de undefined
//objeto.valor.reais = 'R$ 40,00';

//Posso acessar uma propriedade utilizando colchetes, esta forma é muito utilizada quando quero atribuir valores dinamicamente a um objeto
console.log(objeto['nome']);

//Outra estrutura interessante é criar um array de objetos
const animais = [
  capivara = {
    patas : 4,
    alimento : 'mato'
  },
  cobra = {
    patas : 0,
    alimento : 'capivara'
  }
];