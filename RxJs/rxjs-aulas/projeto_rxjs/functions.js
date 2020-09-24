const { Observable } = require("rxjs");
const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Observable((subscriber) => {
    try {
      fs.readdirSync(caminho).forEach((arquivo) => {
        subscriber.next(path.join(caminho, arquivo));
      });
      subscriber.complete();
    } catch (e) {
      subscriber.error(e);
    }
  });
}

function createPipleableOperator(operatorFn) {
  return function (source) {
    return new Observable((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((e) => subscriber.error(e)),
        complete: sub.complete || ((e) => subscriber.complete(e)),
      });
    });
  };
}

function elementosTerminadosCom(padraoTextual) {
  return createPipleableOperator((subscriber) => ({
    next(texto) {
      if (texto.endsWith(padraoTextual)) {
        subscriber.next(texto);
      }
    },
  }));
}

function lerArquivo() {
  return createPipleableOperator((subscriber) => ({
    next(caminho) {
      try {
        const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
        subscriber.next(conteudo.toString());
      } catch (error) {
        subscriber.error();
      }
    },
  }));
}

function separarTextoPor(simbolo) {
  return createPipleableOperator((subscriber) => ({
    next(texto) {
      texto.split(simbolo).forEach((parte) => {
        subscriber.next(parte);
      });
    },
  }));
}

function removerElementosVazios() {
  return createPipleableOperator((subscriber) => ({
    next(texto) {
      if (texto.trim()) {
        subscriber.next(texto);
      }
    },
  }));
}

function removerSeIniciarNumero() {
  return createPipleableOperator((subscriber) => ({
    next(texto) {
      const num = parseInt(texto.trim());
      if (num !== num) {
        subscriber.next(texto);
      }
    },
  }));
}

function removerSimbolos(simbolos) {
  return createPipleableOperator((subscriber) => ({
    next(texto) {
      const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("");
      }, texto);
      subscriber.next(textoSemSimbolos);
    },
  }));
}

function agruparElementos() {
  return createPipleableOperator((subscriber) => ({
    next(palavras) {
      const agrupado = Object.values(
        palavras.reduce((acc, palavra) => {
          const el = palavra.toLowerCase();
          const qtde = acc[el] ? acc[el].qtde + 1 : 1;
          acc[el] = { elemento: el, qtde };
          return acc;
        }, {})
      );
      subscriber.next(agrupado);
    },
  }));
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  separarTextoPor,
  removerElementosVazios,
  removerSeIniciarNumero,
  removerSimbolos,
  agruparElementos,
};
