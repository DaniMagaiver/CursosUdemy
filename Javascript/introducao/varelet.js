//Escopo do var
var a = 'nhai'
{
    var a = 'olá'
}

function local() {
    var a = 'oi'
}

console.log(a);

for(var i = 0; i < 10; i++){

}
console.log('O resultado é ' + i)

//Escopo do Let

let b = 'global'
{
    let b = 'local'
    console.log(b)
}
console.log(b);



