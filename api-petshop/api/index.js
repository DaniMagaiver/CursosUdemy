const express = require("express");
const bodyParser = require("body-parser");

const config = require("config");
const app = express();
const criarTabelas = require("./banco-de-dados/criar-tabelas");

const { formatosAceitos, SerializadorErro } = require("./Serializador");

//Routers
const roteadorFornecedores = require("./rotas/fornecedores");
const roteadorProdutos = require("./rotas/produtos");
const roteadorV2 = require("./rotas/fornecedores/rotas.v2");

//Erros
const NaoEncontrado = require("./erros/NaoEncontrado");
const CampoInvalido = require("./erros/CampoInvalido");
const DadosNaoFornecidos = require("./erros/DadosNaoFornecidos");
const ValorNaoSuportado = require("./erros/ValorNaoSuportado");
const Fornecedor = require("./rotas/fornecedores/Fornecedor");

criarTabelas();
app.use(bodyParser.json());
app.use((requisicao, resposta, proximo) => {
  let formatoRequisitado = requisicao.header("Accept");
  if (formatoRequisitado === "*/*") formatoRequisitado = "application/json";

  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
    resposta.status(406);
    resposta.end();
    return;
  }

  resposta.setHeader("Content-Type", formatoRequisitado);
  proximo();
});

app.use((req, res, proximo) => {
  res.set("Access-Control-Allow-Origin", "*");
  proximo();
});

app.use("/api/fornecedores", roteadorFornecedores);
app.use((erro, requisicao, res, proximo) => {
  let status = 500;
  if (erro instanceof NaoEncontrado) {
    status = 404;
  } else if (
    erro instanceof CampoInvalido ||
    erro instanceof DadosNaoFornecidos
  ) {
    status = 400;
  } else if (erro instanceof ValorNaoSuportado) {
    status = 406;
  }
  const serializador = new SerializadorErro(res.getHeader("Content-Type"));
  res.status(status);
  res.send(
    serializador.serializar({
      mensagem: erro.message,
      id: erro.idErro,
    })
  );
});

app.use('/api/v2/fornecedores', roteadorV2);

app.listen(config.get("api.porta"), () =>
  console.log(
    `\nA api está rodando na porta ${config.get("api.porta")}! ╰(*°▽°*)╯\n`
  )
);
