//Um closure nada mais é que a memória que a função carrega do contexto léxico onde foi criada. Isto permite criar variáveis temporárias e utilizar uma função como uma fábrica.

let esteContexto = 'global';
//Closure
function contexto(){
    let esteContexto = 'local';

    //meDizOcontexto é uma closure, uma função aninhada que possui contexto local.
    return function meDizOcontexto(){
       console.log(esteContexto);
    };
}

let qualContexto = contexto();
qualContexto();

//function Factory

function soma(a){
    return function(b){
        console.log(a + b);
    };
}

const soma1 = soma(2);

soma1(1);