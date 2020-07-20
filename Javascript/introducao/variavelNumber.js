/**
 * 
 */

const peso1 = 1.0; // Valores com .0 são considerados inteiros
const peso2 = Number('2.1'); //Posso transformar uma string em um número
console.log(peso1,peso2); 
console.log(Number.isInteger(peso1)); //Retorna se a variável é um número inteiro.
console.log(Number.isInteger(peso2)); //Um valor real.

const avaliacao1 = 9.071;
const avaliacao2 = 8.376;

const total = avaliacao1 + peso1 + avaliacao2 + peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Define quantas casas decimais devem ser mostradas.
console.log(media.toString()); //Converte o typeof em string
console.log(media.toString(16)); //Converte o typeof em string e exibe o número em hexadecimal, pode ser usado com qualquer base

console.log(typeof Number); //Este number é uma função dentro do javascript
console.log(typeof media); //Este é um número com ponto flutuante


