//jshint esversion:6

//Uma função de callBack é uma função que é passada como parâmetro para outra função ou evento e ocorre quando esta segunda for realizada.

//Um exemplo de função de callback é quando passamos uma função de parâmetro para o setTimeOut, esta função de parâmetro será executada assim que se cumprir um ciclo de intervalo de tempo. Outro exemplo é usando o forEach que executa uma função a cada elemento encontrado dentro de um array.

const elementos = ['água', 'fogo', 'terra', 'ar'];

//Fornece como parâmetros o index e elemento do array.
elementos.forEach((elemento,index) => console.log(`${index + 1} = ${elemento}`));

//Exemplo de função com e sem callback para procurar o elemento fogo

//Sem callBack
const semCallBack = [];

for(let i in elementos){
    if(elementos[i] == 'fogo'){
        semCallBack.push(elementos[i]);
    }
}

console.log(semCallBack);

//Com callBack

const comCallBack = elementos.filter(elemento => elemento == 'fogo');

console.log(comCallBack);
