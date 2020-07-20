//O switch case é utilizado em casos bem restritos
function verificaNota(nota){
    //O switch não recebe true or false
    switch(nota){
        //O switch case no javascript não suporta operadores relacionais
        case 10:
        case 9:
            console.log('Quadro de honra');
            //É necessário utilizar o break para não executar as setenças de código inferiores
            break;
        case 8:
        case 7:
            console.log('aprovado');
            break;
        case 6: case 5: case 4:
            console.log('recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('reprovado');
            break;
        default:
            console.log('nota inválida');
    }
}

verificaNota(5);