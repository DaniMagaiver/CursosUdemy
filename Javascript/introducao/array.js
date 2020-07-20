//Um array em javascript recebe diversos elementos, caso o elemento não exista ele é definido como undefined

const valores = [7.7, 8.9, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[20] = 10
console.log(valores)
console.log(valores.length) //Mostra o tamanho do array
console.log(valores.pop()) //Retira o último valor do vetor
delete valores[0] //Deleta um valor no contexto de objeto, o vetor em javascript é um objeto
console.log(valores)

//O array em javascript aceita diversos valores
valores.push[{id:3}, false, null, 'teste']
console.log(valores)


console.log[valores]

console.log(typeof valores)
