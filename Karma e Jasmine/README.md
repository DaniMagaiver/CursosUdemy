# Testes Unitários

## Fail fast

Trata-se do conceito de permitir uma verificação
rápida para o desenvolvedor se os requisitos do
método estão sendo cumpridos.

## .spec

Utiliza-se a convenção de utilizar .spec em arquivos
de teste.
O angular cli usa por debaixo dos panos o Jasmine é
o motor de testes do angular.

## Estrutura de testes

A estrutura do arquivo de testes é a seguinte:

- Função describe que contém o artefato (classe) que será testado;
- Função it que contém as condições a serem testadas (métodos), a descrição deverá ser do tipo 'should (not)... when...';
- Função expect que discrimina qual deve ser o resultado esperado;
  Ao utilizar nomes de classes e métodos utilizamos o método .name para
  obtê-los ao invés de inserí-los manualmente. Assim fica mais fácil de
  refatorar o código.

```
describe(UniqueIdService.name, () => {

  it(`#${UniqueIdService.prototype.genereUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.genereUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

});
```

## Jasmine

O Jasmine é o motor de testes do angular;

## Karma

O Karma é o framework de testes que por padrão vem no angular;

## BeforeEach

Antes de cada teste deve haver uma instância única do artefato de teste,
para que não haja vazamento de memória do teste. Para isso usamos a
função BeforeEach que será executado antes de cada condição a ser testada.

```
let service:UniqueIdService  = null;
  beforeEach(() => {
      service = new UniqueIdService();
  })
```

Cada it deve ser atômico e não pode sofre influência de outros testes.

## Exceções

Para realizar o teste com exceções utilizamos o método .toThrow() da função expect,
no entanto para que este método possa capturar o erro com sucesso é necessário
passar o método a ser testado em expect como uma arrow function.

```
expect(() => service.genereUniqueIdWithPrefix(null)).toThrow();
```

## Utilizando contextos
Podemos utilizar contextos para especificar melhor em qual dos valores testados
ocorreu o erro com o método .withContext da função expect, extremamente útil 
para quando uma condição testa mais de um valor.
```
expect(() => service.genereUniqueIdWithPrefix(value)).withContext(`Empty value "${value}"`).toThrow();
```
O valor será lançado junto com o erro.

## Validadores booleanos
```
expect(true).toBeTrue();
expect(true).toBe(true);
expect('true').toBeTruthy();
```
Existe uma diferença entre estes três validadores:
- .toBeTrue() : Compara com o valor primitivo booleano true;
- .toBe() : Compara com o valor passado, mas no caso de receber
um objeto Boolean irá dar falso, pois os endereços de memória são
diferentes.
- toBeTruthy : Irá utilizar o valor de verdade do parâmetro recebido,
sendo ele uma string, um número, objeto, etc...

## Testando componentes
O angular possui uma ferramenta exclusiva para desenvolver módulos de testes,
uma vez que o angular gerencia ciclos de vida e nossos componentes e serviços
muitas vezes possuem injeção de dependência.
O TesteBed é responsável por criar módulos para nossos componentes serem testados:
```
beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [LikeWidgetComponent],
        providers: [UniqueIdService]
    }).compileComponents();
})
```
O método .configureTestingModule é responsável por configurar o módulo de testes,
assim como um módulo comum do angular e recebe como declarações, providers dos serviços
e módulos que serão utilizados.
O método compileComponents() retorna uma promise que irá aguardar nosso componente
ser compilado para prosseguir, uma vez que o angular quando compila o componente
busca o template do componente assincronamente.
Também é possível aproveitar um módulo já criado (caso a abordagem não seja 'test first'),
fazendo sua importação:
```
await TestBed.configureTestingModule({
    imports: [LikeWidgetModule]
}).compileComponents();
```

Uma vez criado nosso módulo de testes é necessário criar uma instância do componente,
o que também deve ser feito pelo angular, para isso utilizaremos o método 
.createComponent(classeComponente) que irá retornar um fixture que é um Wrapper do componente, 
ou seja, um invólucro da instância do componente que irá fornecer várias funcionalidades
para nossos testes.

```
describe(`${LikeWidgetComponent.name}`, () => {
    let fixture:ComponentFixture<LikeWidgetComponent> = null;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LikeWidgetComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
    })
});
```

## Executando NgOnInit
Para que o angular execute o método ngOnInit no ciclo de vida
do componente é necessário que ao menos uma vez seja executado o changeDetection.
Podemos chamar o método .detectChanges a partir do nosso ComponentFixture.
```
it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
});
```
O método detectChanges() deverá ser chamado MANUALMENTE em cada condição, pois não
será possível passar valores para as input properties dos componentes do angular.

## Testes assíncronos
Como nossas condições recebem uma função de callback como parâmetro é possível passar
um parâmetro que irá indicar a conclusão do nosso teste.
Caso o parâmetro não seja executado o teste dará um erro de timeout.
```
 it(`#${LikeWidgetComponent.prototype.like.name} should trigger when called`, done => {
        fixture.detectChanges();
        component.liked.subscribe(() => {
            expect(true).toBeTrue();
            done();  //Função que indica fim do teste.
        });
        component.like();
    })
``` 

## Spy
A função spyOn permite monitorar se um determinado método é executado, ela recebe como
parâmetro o objeto que irá ser monitorado e é associado ao método toHaveBeenCalled do 
expect que recebe o método que irá deverá ser chamado.
```
spyOn(component.liked, 'emit');
fixture.detectChanges();
component.like();
expect(component.liked.emit).toHaveBeenCalled();
```
A função spyOn modifica o método transformando-o em um spy.

## Rodando testes em outro navegadores
É possível rodar testes em outros navegadores utilizando o plugin do 
navegador, por exemplo: karma-firefox-launcher.
Uma vez instalado o plugin fazemos a sua importação no karma.conf e indicamos que 
queremos utilizar o navegador Firefox na opção browsers.

## Rodando navegadores Headless
É possível rodar a versão headless dos navegadores, esta versão roda em ambientes
cli, além disso é mais perfomática.
```
"teste-ci": "ng test --watch=false --browsers ChromeHeadless,FirefoxHeadless",
```
Além disso com a flag --watch=false indicamos que o processo não deverá ser segurado,
ideal para realizar testes em servidores de integração contínua.

## Rodando custom launchers
A um tempo atrás o firefox não possuia um launcher headless, por isso era necessário
criar um custom launcher. Isto é um launcher que tinha como base o firefox, mas que 
recebia a flag -headless na hora de sua execução, executando assim o seu script headless.
O que equivale a executar o firefox no cdm:
```
/path/to/firefox -headless
```

## JUnit report
Um JUnit report é um relatório XML do teste, muito útil para servidores de integração
contínua. Para utilizá-lo instalamos o plugin do karma: karma-junit-reporter .
Realizamos a importação dentro do karma.conf e o chamamos em nosso script.
```
"test": "ng test --watch=false --reporters junit --browsers ChromeHeadless",
```

## Cobertura de código
O Karma oferece ao desenvolvedor um relatório de cobertura de testes (code coverage).
Para habilitá-lo devemos passar as flags --sourceMap=true --codeCoverage=true , para
que tenhamos o sourceMap que indicará as linhas de código corretamente após o código
ser minificado e a flag codeCoverage que providenciará o relatório de cobertura.
- Lines: Linhas de código cobertas;
- Function: Funções e métodos cobertos pelos testes;
- Statements: Blocos de declaração cobertos pelo código;
- Branches: Blocos de decisão, onde todas as possibilidades são contempladas.
O code coverage gera um relatório na pasta coverage que indica quais linhas e arquivos
não foram testados.