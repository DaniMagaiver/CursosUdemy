const a = {name: 'teste'}
console.log(a)
const b = a //O objeto b não irá receber o conteúdo do objeto a, mas a referência na memória
b.name = 'Opa' //Quando mudo o conteúdo do objeto b, irei modificar o valor do objeto a por referência.
console.log(a) 

let c = 1
console.log(c)
let d = c   //A mesma coisa não ocorre com variáveis, pois trata-se de um tipo primitivo.
d = 2
console.log(c)
console.log(d)

let valor 
console.log(valor) //O valor inicial da váriavel é undefined, nunca foi inicializada

valor = null //Ausência de valor, ela não aponta para nenhum local de memória
console.log(valor)

//Evite utilizar o undefined, utilizar o null para zerar o valor de uma variável

//console.log(valor.toString()) Não é possível acessar o valor de uma variável null ou undefined, pois a variável não tem referência a objetos na memória.

const produto = {}
console.log(produto.preco) //Uma propriedade não definida em um produto retorna undefined, ou seja, não foi inicializado
//console.log(produto.preco.a) Não é possível acessar a propriedade de uma propriedade que não foi inicializada
console.log(produto) //Um objeto vazio

produto.preco = 3.5 //Objeto definido dinamicamente
console.log(produto)

produto.preco = undefined 
console.log(!!produto.preco) //Retorna false, que é o valor booleano de undefined

delete produto.preco //Deleta a propriedade preco
console.log(produto) //Volta a ser um objeto vazio

produto.preco = null //O produto está sem preço, diferente de um produto gratuito com preço 0.
console.log(!!produto.preco)
console.log(produto)
