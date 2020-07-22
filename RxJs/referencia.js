let a = {
    cor: 'branca'
};

//Cópia por referência
let b = a;
b.cor = 'preto';
console.log(a)

//Cópia por valor
let c = Object.assign(a);
c.cor = 'amarelo'
console.log(c)
