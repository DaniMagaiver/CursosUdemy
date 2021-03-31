const express = require("express");
const routes = require('./routes');

const app = express();
const porta = 3000;

app.listen(porta, () =>
  console.log(`\nServidor rodando na porta ${porta} (～￣▽￣)～!\n`)
);

routes(app);

module.exports = app;
