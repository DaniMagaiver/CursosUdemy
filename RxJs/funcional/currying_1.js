// function verificar(min){
//     return function(max){
//         return function(nome){
//             return function(erro){
//                 if(nome.length < min || nome.length > max){
//                     throw erro
//                 }
//             }
//         }
//     }
// }

const verificar = min => max => nome => erro => {
    if (nome.length < min || nome.length > max){
        throw erro
    }
}

const tamanhoPadrao = verificar(1)(10);

const produto1 = {
    preco: 26,
    nome: ''
}

const verificarNome = tamanhoPadrao(produto1.nome);

const mostrarErro = verificarNome('Tamanho de nome inválido');

mostrarErro();

