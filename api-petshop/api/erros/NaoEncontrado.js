class NaoEncontrado extends Error{
    constructor(nome){
        super(`${nome} não encontrado`);
        this.name = 'Não encontrado';
        this.idErro = 0;
    }
}

module.exports = NaoEncontrado;