//Para contornar o fato de que o this varia conforme o contexto no qual ele é executado utilizamos a função bind ou criando uma variável self.

function OlaMundo(){
    this.mensagem = 'Olá Mundo!';
    const self = this;

    setInterval(function(){
        console.log(self.mensagem);
    }/*.bind(this)*/,1000);
}

OlaMundo();