//jshint esversion:9

function arrowThis() {
    this.i = 0;

    //Dentro do setInterval passamos uma função a ser realizada como argumento.
    setInterval(() => {
        //This não varia conforme o contexto neste caso
        this.i++;
        console.log(i);
    }, 1000);
}

arrowThis();

//This function.bind e arrow

