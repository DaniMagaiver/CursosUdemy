const TipoSeguro = (valor) => {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null);
      } else {
        const novoValor = fn(this.valor);
        return TipoSeguro(novoValor);
      }
    },
    flatMap(fn){
        return this.map(fn.valor)
    }
  };
};

const original = "Esse texto";
const resultado = TipoSeguro(original)
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`);

console.log(resultado.valor);
