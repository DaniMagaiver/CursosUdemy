//jshint esversion:6

//Para criar uma classe primeiro a declaramos, criamos o seu método construtor onde iremos inicializar nossas variáveis, então declaramos os nossos métodos. Lembrando que as váriaveis dentro do método construtor são privadas, então para tornálas públicas usamos o "this.".
//Classes possuem o this com contexto flexível.

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    mostraNome(){
        console.log(this.nome);
    }
}

//Definimos o novo objeto pessoa com o parâmetro que iremos passar para seu construtor
const minhaPessoa = new Pessoa('João');
minhaPessoa.mostraNome();
