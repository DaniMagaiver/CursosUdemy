//Call e apply servem para determinar um contexto para uma função ser executada

function calculaPreco(imposto = 0, moeda = 'R$'){
    return `\n O preço do ${this.produto} é ${moeda} ${this.preco + (this.preco * imposto)}`;
};

//Como não definimos para a função ela tentará retirar os valores do contexto global e retornará undefined e NaN
console.log(calculaPreco());

global.produto = 'manteiga';
global.preco = 5.99;

//Neste caso defini valores globais portanto a função retornará os valores do contexto global
console.log(calculaPreco());

//Agora determinarei o contexto da função através do call e do apply.
const carro = {
    produto: 'Mercedes',
    preco: 40795
};

const camisa = {
    produto: 'Camisa C&A',
    preco: 29.99
}
//No call passamos os argumentos da função livremente
console.log(calculaPreco.call(carro, 0.2, '$')) //Veja que usamos o método call para chamar a função calculaPreco para chamar a função no contexto do objeto carro e passar em seguida já os argumentos que queremos utilizar.

//Já no apply aplicamos os argumentos da função obrigatóriamente em forma de array
const argumentos = [0.15, "R$"];
console.log(calculaPreco.apply(camisa, argumentos))

//Quando usar call e apply
//Call quando queremos passar diretamento alguns poucos argumentos.
//Apply quando temos um retorno em formato de lista, ou muitos valores como argumentos.