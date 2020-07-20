//jshint esversion:6

//Com a palavra reservada arguments podemos manipular um objeto de parâmetros enviado a função, mesmo que esta não tenha sido definida para receber argumentos.

function ReceberParametros(){
    let a = 0;
    for(let argumento of arguments){
        a = a + argumento;
    }
    console.log(a);
}

ReceberParametros(1,2,3,4,'Isto é um problema',5,3.2,3.0);

//Na verdade arguments é um objeto
console.log(typeof arguments);