const Tabela = require("./TabelaProduto");
const DadosNaoFornecidos = require("../../erros/DadosNaoFornecidos");
const CampoInvalido = require("../../erros/CampoInvalido");

class Produto {
  constructor({
    id,
    titulo,
    preco,
    estoque,
    fornecedor,
    dataCriacao,
    dataAtualizacao,
    versao,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.preco = preco;
    this.estoque = estoque;
    this.fornecedor = parseInt(fornecedor);
    this.dataAtualizacao = dataAtualizacao;
    this.dataCriacao = dataCriacao;
    this.versao = versao;
  }

  async criar() {
    this.validar();
    const resultado = await Tabela.inserir({
      titulo: this.titulo,
      preco: this.preco,
      estoque: this.estoque,
      fornecedor: this.fornecedor,
    });

    this.id = resultado.id;
    this.dataCriacao = resultado.dataCriacao;
    this.dataAtualizacao = resultado.dataAtualizacao;
    this.versao = resultado.versao;
  }

  async apagar() {
    return Tabela.remover(this.id, this.fornecedor);
  }

  async carregar() {
    const produto = await Tabela.pegarPorId(this.id, this.fornecedor);
    this.titulo = produto.titulo;
    this.preco = produto.preco;
    this.estoque = produto.estoque;
    this.dataCriacao = produto.dataCriacao;
    this.dataAtualizacao = produto.dataAtualizacao;
    this.versao = produto.versao;
  }

  async atualizar() {
    const dadosParaAtualizar = {};
    if (typeof this.titulo === "string" && this.titulo.length > 0) {
      dadosParaAtualizar.titulo = this.titulo;
    }

    if (typeof this.preco === "number" && this.preco > 0) {
      dadosParaAtualizar.preco = this.preco;
    }

    if (typeof this.estoque === "number") {
      dadosParaAtualizar.estoque = this.estoque;
    }

    if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new DadosNaoFornecidos();
    }

    return Tabela.atualizar(
      {
        id: this.id,
        fornecedor: this.fornecedor,
      },
      dadosParaAtualizar
    );
  }

  diminuirEstoque() {
    return Tabela.subtrair(this.id, this.fornecedor, "estoque", this.estoque);
  }

  validar() {
    const validacoes = [
      {
        validacao: () =>
          typeof this.titulo !== "string" || this.titulo.length === 0,
        erro: () => {
          throw new CampoInvalido("titulo");
        },
      },
      {
        validacao: () => typeof this.preco !== "number" || this.preco < 0,
        erro: () => {
          throw new CampoInvalido("preco");
        },
      },
      {
        validacao: () => typeof this.estoque !== "number" || this.estoque < 0,
        erro: () => {
          throw new CampoInvalido("estoque");
        },
      },
      {
        validacao: () =>
          typeof this.fornecedor !== "number" || this.fornecedor < 0,
        erro: () => {
          throw new CampoInvalido("fornecedor");
        },
      },
    ];

    const erros = validacoes.filter(({ validacao }) => validacao());
    if (erros.length > 0) {
      console.log(this);
      erros.forEach(({ erro }) => erro());
    }
  }
}

module.exports = Produto;
