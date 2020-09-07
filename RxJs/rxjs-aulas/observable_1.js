const { Observable } = require('rxjs');

const observable = new Observable(subscriber => {
    subscriber.next('Observable é bem legal');
});

const promise = new Promise(resolve => {
    resolve('Promise é bem legal');
});

promise.then(console.log);

observable.subscribe(console.log);