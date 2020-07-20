//jshint esversion:6

const [a, b, c, d, e, f] = [1, '1', 2, new Date(0), new Date(0), null];
console.log('1) 1 == um', a == b);
console.log('2) 1 === um', a === b);
console.log('3) 1 > 2', a > b);
console.log('4) new Date(0) == new Date(0)', d == e);
console.log('5) new Date(0).getTime() == new Date(0).getTime', d.getTime() == e.getTime());
console.log('Obs.: Estamos comparando valores em 5 e endereços de memória em 4');
console.log('5) new Date() === new Date()', d === f);
console.log('6) null == undefined', f == undefined);
console.log('7) null === undefined', f === undefined);
