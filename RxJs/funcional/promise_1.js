new Promise(resolve => resolve(['Ana', 'Bia', 'Carlos']))
.then(array => array[0])
.then(nome => nome[0])
.then(primeiraLetra => console.log(primeiraLetra))