const express = require("express");
const bodyParser = require("body-parser");
const roteador = require("./rotas/fornecedores");
const config = require("config");
const app = express();
const criarTabelas = require("./banco-de-dados/criar-tabelas");

criarTabelas();
app.use(bodyParser.json());
app.use("/api/fornecedores", roteador);
app.listen(config.get("api.porta"), () =>
  console.log("A api está funcionando! ╰(*°▽°*)╯")
);
