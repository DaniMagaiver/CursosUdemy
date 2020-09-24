const {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  separarTextoPor,
  removerElementosVazios,
  removerSeIniciarNumero,
  removerSimbolos,
  agruparElementos,
} = require("./functions");
const path = require("path");
const { toArray, map, groupBy, mergeMap, reduce } = require("rxjs/operators");
const _ = require("lodash");

const caminho = path.join(__dirname, "legendas");

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "<\r>",
  "[",
  "]",
  "(",
  ")",
  "~",
  "<font",
  "/font>",
  ">",
  "<",
  "color=#741b47Sync",
  "color=#ead1dcemelinewhovian",
  "color=#ffff00",
  "size=14wwwtvsubtitlesnet",
  "color=#741b47wwwaddic7edcom",
];

lerDiretorio(caminho)
  .pipe(
    elementosTerminadosCom(".srt"),
    lerArquivo(),
    separarTextoPor("\n"),
    removerElementosVazios(),
    removerSeIniciarNumero(),
    removerSimbolos(simbolos),
    separarTextoPor(" "),
    removerElementosVazios(),
    removerSeIniciarNumero(),
    // toArray(),
    // agruparElementos(),
    groupBy((el) => el),
    mergeMap((grupo) => grupo.pipe(toArray())),
    map((palavras) => ({ elemento: palavras[0], qtde: palavras.length })),
    toArray(),
    map((array) => _.sortBy(array, (el) => -el.qtde))
  )
  .subscribe(console.log);
