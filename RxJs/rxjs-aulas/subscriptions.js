const { timer } = require('rxjs');

const numbers = timer(3000, 500);

const sub1 = numbers.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`)
});

const sub2 = numbers.subscribe(num => {
    console.log(`#2 Gerou o número ${num}`)
})

sub1.add(sub2)

setTimeout(() => {
    sub1.unsubscribe()
}, 5000)

