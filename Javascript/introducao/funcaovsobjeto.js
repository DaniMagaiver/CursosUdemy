//ES 2015 (ES6)

//Posso instanciar uma função utilizando new

console.log(typeof Object);
/*Abaixo eu instancio uma função, ou seja, a transformo em objeto*/
console.log(typeof new Object);

console.log(typeof function(){});
/*Abaixo eu instancio uma função, ou seja, a transformo em objeto*/
console.log(typeof new function(){});

class Produto{} //class é uma sintaxe diferente para a função
console.log(typeof Produto);
console.log(typeof new Produto); //Instanciando uma função, transformando-a em objeto.