function timerA(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('Realizando timer A')
            resolve()
        }, 2000)
    })
}

function timerB(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log('Realizando timer B')
            resolve()
        }, 2000)
    })
}

async function timerC(){
    return setTimeout(()=>{
        console.log('Realizando timer C')
    }, 2000)
}

//Não é possível usar await em functions declarations
const timerD = async function(){
    return setTimeout(()=>{
        console.log('Realizando timer D')
    }, 2000)
}

async function resolverComAwait(){
    await timerA();
    await timerB();
    await timerC();
    await timerD();
}

resolverComAwait();