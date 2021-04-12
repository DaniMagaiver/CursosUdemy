# Testes automatizados com Karma avançado

## Testes no DOM

O componenteFixture possui uma referência ao DOM (fixture.nativeElement)
que permite fazer pesquisas no DOM.
É preciso estar atento ao fazer alterações no DOM no ambiente de testes e
chamar o método .detectChanges do fixture que faz a renderização do componente,
do contrário a DOM não enxergará as alterações.

```
 it(`Should display number of likes when (@input likes) 'likes' is incremented`, () => {
      fixture.detectChanges();
      component.likes++;
      fixture.detectChanges();
      const element:HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      expect(element.textContent.trim()).toBe('1');
  });
```

Testes no DOM são mais demorados que testes funcionais, por isso é uma boa prática indicá-los com (D).

## Tempo de teste

Com os relatório JUnit é possível verificar o tempo de execução de cada teste.

## Testes de UI

O coverage não cobre os testes de integração com o DOM, apenas testes funcionais. Testes de integração com o DOM são responsabilidade do desenvolvedor.
Podemos simular eventos de UI utilizando os eventos dos elementos da DOM, como .click, etc...

- É uma boa pratica quando utilizar testes assíncronos passar o done como parâmetro e chamá-lo após o expect para indicar quando o teste foi finalizado.
  É possível simular eventos da DOM utilizando o método .dispatchEvent, passando o evento como parâmetro.

```
const event = new KeyboardEvent('keyup', { key: 'Enter' });
likeWidgetContainer.dispatchEvent(event);
```

## Testes de diretiva

Como a diretiva não é compilada não é necessário ela ser assíncrona e utilizar o .compileComponents() no TestBed.
A diretiva sozinha não tem como ser testada, precisa fazer parte de um componente, para testá-la teremos que criar um Component Dummie.
Também é possível buscar os elementos que possuem uma diretiva aplicada utilizando o
método ".query" do meu fixture.debugElement:

```
const divEl:HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
```

Neste método posso utilizar o By.directive para buscar um elemento através da diretiva.

## NgOnChanges

O ciclo NgOnChanges não pode ser disparado em ambiente de testes, pois ele só é disparado
se a propriedade for atribuída através do template de outro componente, portanto para testá-lo é necessário
chamá-lo manualmente.

```
const change: SimpleChanges = {
  photos: new SimpleChange([], component.photos, true),
};
component.ngOnChanges(change);
```

ngOnChanges é um método que aceita objetos do tipo simpleChanges, este objeto leva como
parâmetros o valor anterior, o novo valor e se é a primeira execução de ngOnChanges.
Outra forma seria criar um component Dummie que recebe o componente como parte de
seu template, desta forma acessamos o componente dentro do componente dummie, para que
ele executo o ciclo de NgOnChanges.

## Interceptando serviços

O método ".inject" do TestBed permite gerar instâncias de serviços, caso este seja um provider
do módulo importado.

```
let fixture: ComponentFixture<PhotoListComponent> = null;
let component: PhotoListComponent = null;
let service: PhotoBoardService = null;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [PhotoListModule, HttpClientModule],
  }).compileComponents();

  fixture = TestBed.createComponent(PhotoListComponent);
  component = fixture.componentInstance;
  service = TestBed.inject(PhotoBoardService);
});
```

As instâncias de serviços vão permitir modificar os serviços para não ter de utilizar nossas
apis nos testes unitários.
Para isto basta ter nossos dados 'fake' e espionar a instância do nosso serviço utilizando a
função "spyOn" do Karma, através do método returnValue podemos espionar a chamada do serviço
e substituir o valor de retorno pelos nossos dados mock.

```
it(`(D) Should display board when data arrives`, () => {
  fixture.detectChanges();
  const photos = buildPhotoList();
  spyOn(service, `getPhotos`).and.returnValue(of(photos));
});
```

Neste caso, como o método getPhotos retorna um observable utilizamos um observable com
os dados mock no lugar.

## HTTP Testing Module

O HttpTesting Module é um módulo que retorna uma instância especial do HttpClient com métodos
de teste. Fazemos testes unitários em chamadas de api somente quando há uma transformação de dados.
Para isso podemos executar a requisição a api e fazer a substituição da resposta por dados
mockados utilizando o HttpTestingController que é um serviço disponível dentro do HttpTestingModule.

```
describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService = null;
  let httpController: HttpTestingController = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });
}
```

Agora podemos utilizar a instância de httpController e do nosso service para Mockar e
testar os dados:

```
it(`#${PhotoBoardService.prototype.getPhotos.name} should return
  photos with description in uppercase`, (done) => {
    service.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
      done();
    });
  httpController.expectOne(mockData.api).flush(mockData.data);
});
```
O método ".expectOne" é responsável por escutar a chamada a rota da api, 
já o método ".flush" realiza a substituição da resposta.
Ambos devem ser utilizados após a inscrição no serviço, pois são síncronos.  

O método httpController.verify() deve ser chamado dentro de afterEach para verificar
em cada teste se existem requisições que foram feitas que não possuem respostas
pré-programadas através do método ".expectOne".
```
afterEach(() => httpController.verify())
```

## Mock Providers
Outra estratégia de mockar nossos services é através da utilização de Mock Providers.
Um Mock Provider substitui os métodos previstos dentro de nossos serviços, deste modo
podemos determinar uma resposta sem termos que criar uma instância do mesmo.
```
 beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useValue: {
            getPhotos(): Observable<Photo[]> {
              return of(buildPhotoList());
            },
          },
        },
      ],
    }).compileComponents();
```
A propriedade provide, indica qual provider será 'mockado', dentro de useValue determinamos
os métodos e respostas dos nossos serviços.

Para criar um conjunto de mocks para utilizar em nossa aplicação podemos criar um service
Mock que será utilizado em nossa aplicação.
```
@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
```
Dentro de nosso teste substituiremos nosso useData pelo useClass que irá substituir o
uso do nosso service pelo uso do nosso service mock.
```
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [PhotoListModule, HttpClientModule],
    providers: [
      {
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService
      },
    ],
  }).compileComponents();
  fixture = TestBed.createComponent(PhotoListComponent);
  component = fixture.componentInstance;
});
```