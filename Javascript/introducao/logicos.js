// jshint esversion:6
/*
Se os dois trabalhos derem certo = tv de 50;
Se um dos trabalhos derem certo = tv de 39;
Se um dos trabalhos derem certo = sorvete;
Se os dois trabalhos derem certo = sorvete;
Se nenhum dos dois trabalhos derem certo = nada;
Se sorvete, não é saudável.
*/

let compras = (trabalho1, trabalho2) => {
 const tv50 = trabalho1 && trabalho2;
 const tv39 = !!(trabalho1 ^ trabalho2);
//  const tv39 = trabalho1 != trabalho2;
 const sorvete = trabalho1 || trabalho2;
 const saudavel = !sorvete;
 return {tv50, tv39, sorvete, saudavel};
};

console.table(compras(true, true));
console.table(compras(true, false));
console.table(compras(false, false));
