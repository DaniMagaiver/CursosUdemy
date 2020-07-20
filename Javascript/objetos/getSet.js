//jshint esversion:8

//É possível utilizar os getters e setters da POO dentro do javascript a partir das palavras reservadas GET e SET
const sequencia = {
  _valor: 1, //O _ é uma convenção definida para dizer que o atributo é privado
  get valor() { return this._valor++; },
  set valor(valor) { //O javascript só aceita sobrecarga de método* quando definimos o método como set
    if (valor >= this._valor) {
      this._valor = valor;
    }
  }
};

//Sobrecarga de método é quando definimos métodos com o mesmo nome, mas tornam-se métodos diferentes, porque a usa identidade (nome + parâmetros) é diferente.

console.log(sequencia.valor); //como não defini um valor ele utiliza o get
sequencia.valor = 10; //como defini um valor ele utiliza o set
console.log(sequencia.valor);
sequencia.valor = 5;
console.log(sequencia.valor); //como o valor é menor que o valor atual, então ele irá ignorar, segundo a regra que atribuí no método set