const { Router } = require("express");
const { TurmaController } = require("../controllers");

const router = Router();

router.get("/turmas", TurmaController.pegaTodasAsTurmas);
router.post("/turmas", TurmaController.criaUmaTurma);
router.get("/turmas/:id", TurmaController.pegaUmaTurma);
router.put("/turmas/:id", TurmaController.atualizaUmaTurma);
router.delete("/turmas/:id", TurmaController.removeUmaTurma);
router.post("/turmas/:id/restaura", TurmaController.restauraUmaTurma);

module.exports = router;
