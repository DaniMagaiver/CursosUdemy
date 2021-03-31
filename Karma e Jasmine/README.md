# Testes Unitarios

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
