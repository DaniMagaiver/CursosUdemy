const { Router } = require("express");
const { PessoaController } = require("../controllers");

const router = Router();

router
  .get("/pessoas/ativas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegarUmaPessoa)
  .post("/pessoas", PessoaController.criaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa);

module.exports = router;
