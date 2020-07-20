//jshint esversion:8

//Posso criar um objeto utilizando a função construtora object
objeto1 = new Object();

//Posso criar um objeto criando uma função construtora, os parâmetros que passo para esta função tornam-se disponíveis apenas dentro de seu escopo

function funcaoContrutora1(parametro = "este é um parâmetro privado"){
  this.atributo = 'isto é um atributo público';

  //posso disponibilizar um valor utilizando uma função get pública
  this.getParametro = () =>{
    return parametro;
  };
}

//Para ter acesso a um objeto criado com uma função construtora precisamos instânciá-lo
const objeto2 = new funcaoContrutora1();
console.log(objeto2.parametro); //Este atributo não existe no nível público, então o retorno será undefined
console.log(objeto2.getParametro());//O atributo existe no nível privado e é acessado através da função pública get

//Podemos usar uma função fábrica para criar um objeto
function funcaoFabrica(valorDoAtributo1 ="Este atributo é público"){
  return {
    //Neste caso o atributo não seria público apenas se não o declarássemos dentro da função fábrica.
    atributo1 : valorDoAtributo1,
  };
}

//Nesse caso para 'instanciar' o objeto basta chamar a função, ou seja, é muito parecido com a função construtora, mas neste caso não preciso utilizar o this para tornar um atributo público.

const objeto3 = funcaoFabrica();
console.log(objeto3.atributo1);

//Outra forma de criar um objeto é a partir do método create da função Object
const objeto4 = Object.create(null);
objeto4.mensagem = 'Este é um objeto criado com create';
console.log(objeto4);

//Uma função famosa que retorna um objeto é a função JSON.parse
const objeto5 = JSON.parse('{"mensagem":"Isto é um objeto criado a partir de um JSON"}');
console.log(objeto5);
