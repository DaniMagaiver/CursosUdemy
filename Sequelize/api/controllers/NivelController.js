// const database = require("../models");

const { NiveisServices } = require("../services");
const niveisServices = new NiveisServices();

module.exports = class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros();
      res.status(200).json(todosOsNiveis);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const nivel = await niveisServices.pegaUmRegistroID(id);
      res.status(200).json(nivel);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body;
    try {
      const nivelCriado = await niveisServices.criaRegistro(novoNivel);
      res.status(200).json(nivelCriado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params;
    const atualizacao = req.body;
    try {
      await niveisServices.atualizaRegistro(atualizacao, id);
      const nivelAtualizado = await niveisServices.pegaUmRegistroID(id);
      res.status(200).json(nivelAtualizado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await niveisServices.apagaRegistro(id);
      res
        .status(200)
        .json({ message: `O nivel de id ${id} foi removido com sucesso` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async restauraNivel(req, res) {
    const { id } = req.params;
    try {
      await niveisServices.restauraRegistro(id);
      const nivelRestaurado = await niveisServices.pegaUmRegistroID(id);
      res.status(200).json(nivelRestaurado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
