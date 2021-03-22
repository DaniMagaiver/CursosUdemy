const modelos = [
  {
    nomeModelo: "Fornecedor",
    modelo: require("../rotas/fornecedores/ModeloTabelaFornecedor"),
  },
  {
    nomeModelo: "Produtos",
    modelo: require("../rotas/produtos/ModeloTabelaProdutos"),
  },
];

async function criarTabelas() {
  for (let i = 0; i < modelos.length; i++) {
    const { nomeModelo, modelo } = modelos[i];
    await modelo
      .sync()
      .then(() =>
        console.log(`\nTabela ${nomeModelo} criada com sucesso!! ♪(´▽｀)\n`)
      )
      .catch(console.error);
  }
}

module.exports = criarTabelas;
