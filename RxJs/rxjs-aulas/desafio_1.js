const { Observable } = require('rxjs');

const obs$ = function (min){
    return function(max){
        return new Observable(subscriber => {
            if(min > max) [min, max] = [max, min]
            while(min <= max){
                subscriber.next(min);
                min++;
            }
            subscriber.complete();
        })
    }
}

const min = obs$(9);
const max = min(2);

max.subscribe({
    next(valor){
        console.log(valor)
    },
    complete(){
        console.log('Stream completado')
    }
});

