// function Produto(nome, preco, desc = 0.15){
//     this.nome = nome;
//     this.preco = preco;

//     this.precoFinal = function(){
//         return preco - desc 
//     }
// }

class Produto{
    //Não existem atributos privados em javascript
    constructor(nome, preco, desc = 0.15){
        this._nome = nome
        this._preco = preco;
        this._desc = desc;
    }

    get nome(){
        return this._nome; 
    }

    set preco(novoPreco){
        this._preco = novoPreco >= 0 ? novoPreco : this._preco
    }

    get preco(){
        return this._preco
    }

    get precoFinal(){
         return this._preco - this.desc;
    }
}

const p1 = new Produto('Caneta', 1.70);

Produto.prototype.log = function (){
    console.table(this);
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function(){
        return this._desc
    },
    set: function(novoDesconto){
        this._desc = novoDesconto
    }
})

p1.desc = 5;

p1.preco = 2;

p1.preco = -2;

p1.log();

