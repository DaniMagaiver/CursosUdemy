// const dataBase = require("../models");
// const { literal } = require("sequelize");

const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();

module.exports = class PessoaController {
  static async pegaPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegarUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await pessoasServices.pegaUmRegistroID(id);
      return res.status(200).json(umaPessoa);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await pessoasServices.atualizaRegistro(novasInfos, id);
      const pessoaAtualizada = await pessoasServices.pegaUmRegistroID(id);
      res.status(200).json(pessoaAtualizada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.apagaRegistro(id);
      return res.status(200).json({ message: `Id ${id} deletado` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.restauraRegistro(id);
      return res
        .status(200)
        .json({ message: `Pessoa ${id} restaurada com sucesso!` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async cancelaPessoa(req, res) {
    const { estudanteId } = req.params;
    try {
      await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId));

      res
        .status(200)
        .json({ message: `matriculas do estudante ${estudanteId} canceladas` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
