//jshint esversion:6

//Esta é uma arrow function com retorno explícito de um parâmetro.
const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado';

//Do modo abaixo utilizamos apenas se houverem mais de dois parâmetros. 
const res = (nota) => nota >= 7 ? 'aprovado' : 'reprovado';

console.log(resultado(6));
console.log(resultado(7));
console.log(res(2));