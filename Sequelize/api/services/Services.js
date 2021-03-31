const database = require("../models");

class Services {
  constructor(nomeDoModelo) {
    this.database = database[nomeDoModelo];
  }

  pegaTodosOsRegistros() {
    return this.database.findAll();
  }

  pegaUmRegistroID(id) {
    return this.database.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  pegaUmRegistro(where) {
    return this.database.findOne({
      where: { ...where },
    });
  }

  criaRegistro(dados) {
    return this.database.create(dados);
  }

  atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return this.database.update(
      dadosAtualizados,
      {
        where: {
          id: Number(id),
        },
      },
      transacao
    );
  }

  atualizaRegistros(dadosAtualizados, where, transacao = {}) {
    return this.database.update(
      dadosAtualizados,
      {
        where: { ...where },
      },
      transacao
    );
  }

  apagaRegistro(id) {
    return this.database.destroy({
      where: {
        id: Number(id),
      },
    });
  }

  restauraRegistro(id) {
    return this.database.restore({
      where: {
        id: Number(id),
      },
    });
  }

  pegaERetornaQuantidades(where = {}, agregadores) {
    return this.database.findAndCountAll({
      where: { ...where },
      ...agregadores
    });
  }
}

module.exports = Services;
