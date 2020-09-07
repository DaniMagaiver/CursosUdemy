const { Observable } = require('rxjs');

const obs$ = Observable.create(subscriber => {
    subscriber.next('RxJS');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('poderoso');

    if(Math.random() > 0.5){
        subscriber.complete();
    } else {
        subscriber.error('Xiiiii');
    }
});

obs$.subscribe({
    next(valor){
        console.log(valor)
    },
    error(erro){
        console.error(erro)
    },
    complete(){
        console.log('Stream completado')
    }
}
);
