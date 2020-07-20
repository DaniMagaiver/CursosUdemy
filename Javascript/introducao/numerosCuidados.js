console.log (7/0); //Em outras linguagens isto retornaria um erro, mas no javascript retorna um número do tipo infinito
console.log ("6"/2); /// O javascript permite cálculos entre strings e numbers, ele converterá o primeiro e fará a operação.

numero = 875;
console.log(numero.toString(8));

console.log("teste" + 2); //Quando somada uma string com um número ele concatena.
console.log("teste" * 2); //Este tipo de operação é inválidade e retona o valor NaN (Not a Number)
//console.log(10.toString()); //Não é possível converter um número literal diretamente para String deste modo.
console.log((10).toString(2)); //É possível converter um número literal através de parênteses.

