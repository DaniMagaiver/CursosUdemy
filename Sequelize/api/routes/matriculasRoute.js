const { Router } = require("express");
const { MatriculaController } = require("../controllers");

const router = Router();

router
  .delete(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    MatriculaController.apagaMatricula
  )
  .post("/pessoas/:estudanteId/matriculas", MatriculaController.criaMatricula)
  .get(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    MatriculaController.pegarUmaMatricula
  )
  .put(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    MatriculaController.pegarUmaMatricula
  )
  .get(
    "/pessoas/matriculas/:turmaId/confirmadas",
    MatriculaController.pegaMatriculasPorTurma
  )
  .get("/pessoas/:estudanteId/matriculas", MatriculaController.pegaMatriculas)
  .get("/pessoas/matriculas/lotadas", MatriculaController.pegaTurmasLotadas);

module.exports = router;
