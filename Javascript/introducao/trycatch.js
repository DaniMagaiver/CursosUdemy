//jshint esversion:6
//Utilizamos try e cath no javascript para tratar erros do sistemas

//Aqui podemos criar uma função para tratar o erro
function erro(e){
    //utilizamos o throw para lançar o erro de volta
    throw new Error();
}

function gritar(obj){
    //Irá tentar a execução do bloco de código
    try{
        console.log(obj.name.toUpperCase());
    } catch(e) { //Irá receber o erro, caso ele ocorra
        throw e.message; //posso retornar apenas a mensagem de erro
    }
}

let obj = {nome : 'nhai'};
gritar(obj);
