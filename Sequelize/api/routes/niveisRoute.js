const { Router } = require("express");
const { NivelController } = require("../controllers");

const router = Router();

router.get("/niveis", NivelController.pegaTodosOsNiveis);
router.get("/niveis/:id", NivelController.pegaUmNivel);
router.post("/niveis", NivelController.criaNivel);
router.delete("/niveis/:id", NivelController.apagaNivel);
router.put("/niveis/:id", NivelController.atualizaNivel);
router.post("/niveis/:id/restaura", NivelController.restauraNivel);

module.exports = router;
