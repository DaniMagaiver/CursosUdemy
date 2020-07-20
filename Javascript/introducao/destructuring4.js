//jshint esversion:6
const aleatorio = ([min = 0, max = 1000]) =>{
    if(min > max) [max, min] = [min, max];
    let valor = Math.random() * (max - min) + min;
    valor = Math.floor(valor);
    return valor;
};

//Se for para uma atribuição simples podemos utilizado

console.log(aleatorio([47,50]));