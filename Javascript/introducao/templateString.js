const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!" //Não se pode querbrar linha
const template = `
Olá
${nome}!
`  // Permite usar quebra de linha e interpolação
console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //Podemos interpolar funções e operações matemáticas