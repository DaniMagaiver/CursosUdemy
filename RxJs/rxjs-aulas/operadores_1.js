const { of } = require('rxjs');
const { last, map } = require('rxjs/operators');

const obs1$ = of(1, 2, 'ana', false, 'ultimo');

obs1$.pipe(
    last(),
    map(v => v[0]),
    map(v => `O valor encontrado foi ${v}`)
    ).subscribe(valor => {
    console.log(`O valor gerado foi ${valor}`)
})
