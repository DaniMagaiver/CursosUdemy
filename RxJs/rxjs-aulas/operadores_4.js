const { Observable } = require('rxjs');

function elementosComDelay(tempo, ...elementos){
    return new Observable(subscriber => {
        (elementos || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if(elementos.length === i + 1){
                    subscriber.complete()
                }
            }, tempo * (i + 1))
        })
    })
}

elementosComDelay(2000, 'a', 'b', 'c')
    .subscribe(console.log);