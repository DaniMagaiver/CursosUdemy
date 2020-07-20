//jshint esversion: 6

//Quando tentamos acessar uma variavel não definida em uma função, então a variável irá procurar nos contextos léxicos superiores.
//Contexto léxico = escopo;
const nome = 'Mariana';

const funcionario = {
    nome: 'Douglas',
    telefone: '1195573846',
    filho: {
        nome: 'Arthur',
        telefone: '11957753846'
    },
};

console.log(`
    Como possuem escopos diferente posso utilizar 'nome' para definir a variavel de valor ${nome}, a propiedade do objeto funcionario com valor ${funcionario.nome} e ainda a propriedade do objeto filho com o mesmo nome e valor ${funcionario.filho.nome}.
    Definir variáveis dentro dentro de um escopo local ajuda a evitar conflitos dentro do código.
`);