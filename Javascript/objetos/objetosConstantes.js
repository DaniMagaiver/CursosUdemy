//Quando crio uma constante na verdade eu digo que o apontamento de memória daquele endereço não pode ser modificado, no entanto no caso dos objetos o valores de atributos e métodos podem ser modificados

const objeto = {};
objeto.mensagem = 'Modifiquei o nome do Objeto';

console.log(objeto.mensagem);

//Uma forma de impedir que os atributos de um objeto sejam modificados é congelando-o

Object.freeze(objeto);
objeto.mensagem = 'Estou tentando modificar um atributo';
//Isto não gera um erro, mas o valor não é alterado.
console.log(objeto.mensagem);