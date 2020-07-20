/**Uma função é um bloco de código nomeado, recebe parâmetros de entrada e retorna um valor. No entanto, uma função pode não receber dados de entrada e nem retornar nenhum valor*/

//Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma() //Definindo apenas um valor, ou nenhum de entrada. Os valores serão passados como undefined, o retorno será um NaN
imprimirSoma(2,3,4,5) //Posso passar mais de um valor

function soma(a = 3, b = 5){ //Posso indicar um valor padrão para quando o valor não for passado
    return a + b //retornando o valor da função
}

console.log(soma())
console.log(soma(2,3))