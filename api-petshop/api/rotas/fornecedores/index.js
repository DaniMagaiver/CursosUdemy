const roteador = require("express").Router();
const roteadorProdutos = require("../produtos");
const TabelaFornecedor = require("./TabelaFornecedor");
const Fornecedor = require("./Fornecedor");
const { SerializadorFornecedor } = require("../../Serializador");

roteador.options("/", (req, res) => {
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(204);
  res.end();
});

roteador.get("/", async (req, res, proximo) => {
  try {
    const resultados = await TabelaFornecedor.listar();
    res.status(200);
    const Serializador = new SerializadorFornecedor(
      res.getHeader("Content-Type"),
      ["empresa"]
    );
    res.send(Serializador.serializar(resultados));
  } catch (erro) {
    proximo(erro);
  }
});

roteador.options("/:idFornecedor", (req, res) => {
  res.set("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(204);
  res.end();
});

roteador.get("/:idFornecedor", async (req, res, proximo) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id: parseInt(id) });
    await fornecedor.carregar();
    res.status(200);
    const serializador = new SerializadorFornecedor(
      res.getHeader("Content-Type"),
      ["email", "dataCriacao", "empresa","dataAtualizacao", "versao"]
    );
    res.send(serializador.serializar(fornecedor));
  } catch (erro) {
    proximo(erro);
  }
});

roteador.post("/", async (req, res, proximo) => {
  try {
    const dadosRecebidos = req.body;
    const fornecedor = new Fornecedor(dadosRecebidos);
    await fornecedor.criar();
    res.status(201);
    const Serializador = new SerializadorFornecedor(
      res.getHeader("Content-Type"),
      ["empresa"]
    );
    res.send(Serializador.serializar(fornecedor));
  } catch (erro) {
    proximo(erro);
  }
});

roteador.put("/:idFornecedor", async (req, res, proximo) => {
  try {
    const id = req.params.idFornecedor;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, { id });
    const fornecedor = new Fornecedor(dados);
    await fornecedor.atualizar();
    res.status(204).end();
  } catch (erro) {
    proximo(erro);
  }
});

roteador.delete("/:idFornecedor", async (req, res, proximo) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id });
    await fornecedor.carregar();
    await fornecedor.remover();
    res.status(204).end();
  } catch (erro) {
    proximo(erro);
  }
});

const verificarFornecedor = async (req, res, proximo) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id });
    await fornecedor.carregar();
    req.fornecedor = fornecedor;
    proximo();
  } catch (erro) {
    proximo(erro);
  }
};

roteador.use("/:idFornecedor/produtos", verificarFornecedor, roteadorProdutos);

module.exports = roteador;