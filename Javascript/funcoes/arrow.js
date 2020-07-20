//jshint esversion:9

//Arrow functions possuem uma sintaxe reduzida e podem ser declaradas da seguinte forma:

//Sintaxe para dois argumentos
const a = (a, b) => {console.log(a + b);};

//Sintaxe para argumento único
const b = c => console.log(c);

//Sintaxe para nenhum argumentos

const c = _ => console.log('Olá');
const d = () => console.log('Oi');

a(1,2);
b('Teste');
c();
d();