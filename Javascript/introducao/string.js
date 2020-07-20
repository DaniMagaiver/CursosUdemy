const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o caracter nesta posição
console.log(escola.charAt(5)) //retorna vazio
console.log(escola.charCodeAt(3)) //retorna o valor na tabela Unicode
console.log(escola.indexOf("r")) //faz uma busca no array e retorna a posição do valor passado
console.log(escola.substring(0,3)) //retorna o valor da string no intervalo definido
console.log("Escola ".concat(escola).concat("!")) //concatena, pode ser substituído pelo +
console.log(escola.replace("3","e")) //Um caracter pelo outro passado
console.log("Ana,Maria,Pedro".split(",")) //transforma a string em um array
console.log(escola.length) //Exibe o tamanho da string
