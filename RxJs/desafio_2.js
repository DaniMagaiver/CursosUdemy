const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil:true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil:true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil:false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil:false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil:true},
]

//1 - Filtrar frágeis
//2 - Calcular o total
//3 - Calcular a média

const notFrageis = carrinho.filter(item => item.fragil);
const totais = notFrageis.map(item => item.preco * item.qtde);
const mediasTotais = totais.map(total => total / totais.length)
const somaTotais = mediasTotais.reduce((prvTotal, crrTotal) => prvTotal + crrTotal)
console.log(somaTotais)