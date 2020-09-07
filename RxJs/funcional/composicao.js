
const composicao = (...fns) => 
valor => fns.reduce(async (acc, fn) => {
    if(Promise.resolve(acc) === acc){
        return fn(await acc)
    } else {
        return fn(acc)
    }
}, valor);

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!!`
}

function tornarLento(texto){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
}

const resultado = composicao(
    gritar,
    enfatizar,
    tornarLento
);

const resultado2 = composicao(
    gritar,
    enfatizar,
);

resultado2('Teste')
.then(console.log);

resultado('Teste')
.then(console.log);