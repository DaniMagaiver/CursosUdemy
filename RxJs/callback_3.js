const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const precosFinais = carrinho.map(item => item.qtde * item.preco);
const produtos = carrinho.map(item => item.nome);

console.table(precosFinais);
console.table(produtos);

const qtdeMaioresZero = carrinho.filter(item => item.qtde > 0).map(item => item.nome)
console.log(qtdeMaioresZero);

// function map(array, fn){
//     let NovoArray = [];
//     for(let i = 0; i < array.length; i++){
//         NovoArray.push(fn(array[i]))
//     }
//     return NovoArray;
// }

// const nomeItems = map(carrinho, (item) => item.nome);
// console.table(nomeItems);

// Array.prototype.meuFiltro = function(fn){
//     const filtered = [] 
//     for(let i = 0; i < this.length; i++){
//         if(fn(this[i])) filtered.push(this[i]) 
//     }
//     return filtered
// }

// const qtdMaiorZero = carrinho.meuFiltro(item => item.qtde > 0).map(item => item.nome);

// console.log(qtdMaiorZero);
