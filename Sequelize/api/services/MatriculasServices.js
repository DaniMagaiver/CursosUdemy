const Services = require("./Services");

module.exports = class MatriculasServices extends Services {
  constructor() {
    super("Matriculas");
    this.pessoas = new Services("Pessoas");
  }

  async pegaUmRegistro(matriculaId, estudanteId) {
    return super.pegaUmRegistro({
      id: Number(matriculaId),
      estudante_id: Number(estudanteId),
    });
  }

  async atualizaRegistros(novasInfos, matriculaId, estudanteId) {
    return super.atualizaRegistros(novasInfos, {
      id: Number(matriculaId),
      estudante_id: Number(estudanteId),
    });
  }

  async pegaMatriculasPessoa(idPessoa) {
    const pessoa = await this.pessoas.pegaUmRegistroID(idPessoa);
    return pessoa.getAulasMatriculadas();
  }
};
