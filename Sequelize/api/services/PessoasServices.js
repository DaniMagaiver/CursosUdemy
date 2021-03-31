const Services = require("./Services");

module.exports = class PessoasServices extends Services {
  constructor() {
    super("Pessoas");
    this.matriculas = new Services("Matriculas");
  }

  pegaRegistrosAtivos(where = {}) {
    return this.database.findAll({ where: { ...where } });
  }

  pegaTodosOsRegistros(where = {}) {
    return this.database.scope("todos").findAll({ where: { ...where } });
  }

  cancelaPessoaEMatriculas(estudanteId) {
    return this.database.sequelize.transaction(async (transacao) => {
      await super.atualizaRegistro({ ativo: false }, estudanteId, {
        transaction: transacao,
      });

      await this.matriculas.atualizaRegistros(
        { status: "cancelado" },
        { estudante_id: estudanteId },
        {
          transaction: transacao,
        }
      );
    });
  }

  
};
