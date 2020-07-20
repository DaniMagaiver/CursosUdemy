//jshint esversion:10

//function declaration

//functions declarations são lidas primeiro no carregamento do script
console.log(soma(1,2));
function soma(a,b){
    return a + b;
}

//functions declarations podem ser sobrescritas por var.
//var soma = 1;

//function expression
const sub = function sub(a,b){
    return a - b;
};

//function expressions declaradas com const não são sobrescritas, mas também não são carregadas primeiro no script
console.log(sub(1,2));

//named function expression
//Não há tantas vantagens em ser utilizada a não ser ver o nome da função em alguns contextos de erro.
const mult = function mult(a,b){
    return a * b;
};

console.log(mult(1, 2));


//posso combinar functions expressions com funções construtoras
const produtosSoma = function(a = 2,b = 5){
    const soma = a + b;
    this.quadrado = function (){
        return soma ** 2;
    };
    this.cubo = () => soma ** 3;
    this.getSoma = () => soma;
};

const soma1 = new produtosSoma(2, 5);
console.log('quadrado = ' + soma1.quadrado());
console.log('cubo = ' + soma1.cubo());
