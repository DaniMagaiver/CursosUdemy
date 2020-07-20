/*
    O hoisting é quando a declaração da variável é içada para a parte de cima do código. Isto ocorre com variáveis definidas por var e variáveis dentre de funções.
*/

console.log(a);
var a = 2;
console.log(a);

// console.log(b);
// let b = 3;           Isto não ocorre com let
// console.log(b);