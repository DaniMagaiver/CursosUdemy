# LIDANDO COM ARQUIVOS ESTÁTICOS

## CSS Modules

O CSS modules é um pacote npm que ajuda a isolar e lidar com arquivos css e sass do projeto, além
disso oferece tipagem para os estilos e permite a utilização do autocomplete.

Para instalá-lo utilizamos:
`npm install -D typescript-plugin-css-modules sass`

Para utilizar um módulo scss basta fazer sua importação no começo do arquivo index.tsx.
`import styles from './Cardapio.module.scss';`

E utilizar as classes em seu classname.

` <nav className="menu">`

## Arquivos estáticos

O webpack não consegue entender arquivos estáticos, pois faz a sua leitura como simples strings,
o que faz com que ele ignore paths na hora do build.
Para fazer importação de arquivos estáticos devemos fazer a importação do arquivo dentro do tsx.
`import logo from "../../assets/logo.svg";`
E utilizá-lo como se estivéssemos utilizando um objeto comum do javascript.
`<img src={logo}/>`
Para arquivos SVG outra opção é utilizar o pacote SVGR que é nativo do react, que permite utilizar SVGS como
componentes.

```
import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "../../assets/logo.svg";

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo/>
      </nav>
    </main>
  );
}
```

## Absolute imports

Podemos determinar a pasta base para nossas importações através da configuração do typescript,
assim evitamos ter que usar caminhos relativos que podem se tornar muito longos de acordo com
a complexidade do projeto.
Para isso adicionamos a configuração no compilerOptions no arquivo tsconfig.json:
`"baseUrl": "src"`

## Type

É possível criar tipos dinamicamente a partir de objetos, para isso
podemos utilizar o recurso _type_ do typescript.

`type IOpcao = typeof filtros[0];`

## ClassNames

O pacote classnames permite utilizar os classNames do react de maneira condicional
sem ter que utilizar as template strings, o que melhor a leitura do código.
`npm install classnames`

```
<button className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtro === opcao.id,
          })}>{opcao.label}</button>
```

## Pasta Public
A pasta public deve ser usada para fazer a importação dinâmica
de imagens. Quando houverem muitas imagens a serem importadas.
É recomendado que o src das imagens inicie com "/public" ao invés de "public".