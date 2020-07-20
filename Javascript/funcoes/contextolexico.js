//jshint esversion:10

let contexto = 'global';

function funcao(){
    console.log(contexto);
}

function qualContexto(){
    let contexto = 'local';
    funcao();
}

//Uma função carrega consigo o contexto no qual ela foi definida
qualContexto();