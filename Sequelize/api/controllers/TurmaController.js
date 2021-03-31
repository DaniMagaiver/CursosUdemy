// const database = require("../models");
// const { Op } = require("sequelize");

const { TurmasServices } = require("../services");
const turmasServices = new TurmasServices();

module.exports = class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};
    data_inicial || data_final ? (where.data_inicio = {}) : null;
    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null;
    data_final ? (where.data_inicio[Op.lte] = data_final) : null;
    try {
      const todasAsTurmas = await database.Turmas.findAll({ where });
      res.status(200).json(todasAsTurmas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const turma = await turmasServices.pegaUmRegistroID(id);
      res.status(200).json(turma);
    } catch (error) {
      res.status(500).json(err);
    }
  }

  static async criaUmaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const turmaCriada = await turmasServices.criaRegistro(novaTurma);
      res.status(201).json(turmaCriada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async atualizaUmaTurma(req, res) {
    const { id } = req.params;
    const turmaAtualizacao = req.body;
    try {
      await turmasServices.atualizaRegistro(turmaAtualizacao, id);
      const turmaAtualizada = await turmasServices.pegaUmRegistroID(id);
      res.status(200).json(turmaAtualizada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async removeUmaTurma(req, res) {
    const { id } = req.params;
    try {
      await turmasServices.apagaRegistro(id);
      res
        .status(200)
        .json({ message: `Turma de id ${id} removida com sucesso` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async restauraUmaTurma(req, res) {
    const { id } = req.params;
    try {
      await turmasServices.restauraRegistro(id);
      const turmaRestaurada = await turmasServices.pegaUmRegistroID(id);
      res.status(200).json(turmaRestaurada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
