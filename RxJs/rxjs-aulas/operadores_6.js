const { of, Observable } = require('rxjs');

// function terminadoCom(parteFinal){
//     return function(source){
//         return new Observable(subscriber => {
//             source.subscribe({
//                 next(v){
//                     if(v.endsWith(parteFinal)){
//                         subscriber.next(v)
//                     }
//                 }
//             })
//         })
//     }
// }

function gerarOperador(fnNext, fnComplete){
    return function(source){
        return new Observable(subscriber => {
            source.subscribe({
                next(value){
                    subscriber.next(fnNext(value));
                },
                error(e){
                    console.error(e);
                },
                complete(){
                    if(fnComplete){
                        fnComplete();
                    }
                }
            })
        })
    }
}

function terminadoCom(parteFinal){
    return function verificar(valor){
        if(valor.endsWith(parteFinal)){
            return valor
        }
    }
}

const operadorTerminadoCom = gerarOperador(terminadoCom);



of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
.pipe(
    operadorTerminadoCom('Silva')
)
.subscribe(console.log)