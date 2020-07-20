//Um objeto em javascript é uma coleção de chave e valor
const prod1 = {} //Um par de chaves é uma forma literal de criar um objeto vazio
prod1.nome = 'Celular Ultra Mega' //Um atributo em javascript pode ser adicionado dinamicamente
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //Notação colchete que permite espaços no nome do atributo EVITAR!

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{   //Posso ter um obj dentro de outro
        blala:1,
        obj:{   //Posso ter duas chaves iguais dentro de objetos diferentes
            lala: 2
        }
    }
}

//JSON(Javascript Object Notation) é um formato textual para troca de dados entre sistemas

console.log(prod2)