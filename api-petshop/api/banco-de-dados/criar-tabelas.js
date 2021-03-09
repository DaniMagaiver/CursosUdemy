const ModeloTabela = require("../rotas/fornecedores/ModeloTabelaFornecedor");

module.exports = () => {
  ModeloTabela.sync()
    .then(() => console.log("Tabela criada com sucesso!! ♪(´▽｀)"))
    .catch(console.log);
};
