const { from, Observable, Subscriber } = require('rxjs');

function createPipeableOperator(fnOperator){
    return source => new Observable(subscriber => {
            source.subscribe(fnOperator(subscriber))
    })
}

function primeiro(){
    return createPipeableOperator(subscriber => ({
            next(valor){
                subscriber.next(valor)
                subscriber.complete()
            }
    }))
}

function ultimo(){
    return createPipeableOperator(subscriber => ({
        next(v){
            ultimo = v
        },
        complete() {
            subscriber.next(ultimo)
            subscriber.complete()
        }
    }))
}

from([1,2,3,4])
.pipe(
    // primeiro(),
    ultimo(),
)
.subscribe(console.log);