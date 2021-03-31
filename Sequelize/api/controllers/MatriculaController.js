const { MatriculasServices } = require("../services");
const { literal } = require("sequelize");
const matriculasServices = new MatriculasServices();

module.exports = class MatriculaController {
  static async pegarUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const umaMatricula = await matriculasServices.pegaUmRegistro(
        matriculaId,
        estudanteId
      );
      return res.status(200).json(umaMatricula);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await matriculasServices.criaRegistro(
        novaMatricula
      );
      return res.status(201).json(novaMatriculaCriada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;
    try {
      await matriculasServices.atualizaRegistros(
        novasInfos,
        matriculaId,
        estudanteId
      );
      const matriculaAtualizada = await matriculasServices.pegaUmRegistro(
        matriculaId,
        estudanteId
      );
      res.status(200).json(matriculaAtualizada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async apagaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await dataBase.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
        },
      });
      res
        .status(200)
        .json({ message: `A matricula ${matriculaId} foi deletada` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const matriculas = await matriculasServices.pegaMatriculasPessoa(
        estudanteId
      );
      res.status(200).json(matriculas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaMatriculasPorTurma(req, res) {
    const { turmaId } = req.params;
    try {
      const todasAsMatriculas = await matriculasServices.pegaERetornaQuantidades(
        {
          turma_id: Number(turmaId),
          status: "confirmado",
        },
        {
          limit: 20,
          order: [["estudante_id", "DESC"]],
        }
      );
      res.status(200).json(todasAsMatriculas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaTurmasLotadas(req, res) {
    const lotacaoTurma = 2;
    try {
      const turmasLotadas = await matriculasServices.pegaERetornaQuantidades(
        {
          status: "confirmado",
        },
        {
          attributes: ["turma_id"],
          group: ["turma_id"],
          having: literal(`count(turma_id) >= ${lotacaoTurma}`),
        }
      );

      res.status(200).json(turmasLotadas.count);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
