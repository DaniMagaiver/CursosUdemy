//jshint esversion:8

//No ecmascript 2015 é possível adicionar um atributo a partir de uma variável sem ter que ficar referenciando o seu nome e valor.
let valor = 1;
const objeto1 = {valor};

//Também posso atributir um nome dinamicamente a partir de uma variável
let nomedoatributo ='istoeumnome';
const objeto2 = {[nomedoatributo]:valor};

//Existem duas formas de criar um método em um objeto
const objeto3 = {
  metodo1 : function(){
    console.log('criado com uma função anônima');
  },
  metodo2(){
    console.log('Criado utilizando apenas () no padro ES6');
  }
};
