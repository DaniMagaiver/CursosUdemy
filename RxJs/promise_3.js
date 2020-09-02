const promiseA = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('resultadoPromiseA')
    },2000)
})

const promiseB = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('resultadoPromiseB')
    },2000)
})

const promiseC = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('resultadoPromiseC')
    },2000)
})

const esperarPor = function(){
    return Promise.all([
        promiseA,
        promiseB,
        promiseC,
    ])
}

esperarPor()
    .then(console.log)