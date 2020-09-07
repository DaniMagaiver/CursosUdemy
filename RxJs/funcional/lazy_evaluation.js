function lazy(a){
    const fim = Date.now() + 2500;
    while(Date.now() < fim){}

    const valor = Math.pow(a, 3)
    return function(b){
        return valor + b;
    }
}

function eager(a, b){
    const fim = Date.now() + 2500;
    while(Date.now() < fim){}

    const valor = Math.pow(a, 3)
    return valor + b;
}

console.time('#1');
console.log(eager(3,200));
console.log(eager(3,200));
console.log(eager(3,200));
console.timeEnd('#1');

console.time('#2');
const _lazy = lazy(3);
console.log(_lazy(200));
console.log(_lazy(200));
console.log(_lazy(200));
console.timeEnd('#2');

console.time('#3');

const teste1 = (a, b) => console.log(a, b);
teste1('a', 'b');

console.timeEnd('#3');

console.time('#4');

const teste2 = (a) => (b) => console.log(a, b);
teste2('a')('b');

console.timeEnd('#4');