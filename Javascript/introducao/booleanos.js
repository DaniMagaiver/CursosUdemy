let isAtivo = false //podemos declarar os valores de false e true no booleano
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


/* TIPOS QUE SÃO VERDADEIROS */
isAtivo = 1
console.log(!!isAtivo) //uma forma muito simples de verificar se um valor é verdadeiro ou falso, dupla negação mostra booleano valor original
console.log(!!3) //Números inteiros positivos ou negativos são verdadeiros
console.log(!!-1)
console.log(!!' ') //Um espaço vazio é verdadeiro
console.log(!!'texto') //Um texto é verdadeiro
console.log(!![]) //Um array vazio é verdadeiro
console.log(!!{}) //Um objeto literal vazio é verdadeiro
console.log(!!Infinity) //Um tipo infinito é verdadeiro

/* TIPOS QUE SÃO FALSOS */
console.log(!!0) //Zero é falso
console.log(!!'') //Um texto zaio é falso
console.log(!!null) //vazio é falso
console.log(!!NaN) //Not a Number é falso
console.log(!!undefined) //undefined é falso

let nome = ''
console.log(nome || 'Digite um texto') //Uma comparação com ou retonar o valor verdadeiro.
nome = 'Lucas'
console.log(nome || 'Digite um texto')




