# LIDANDO COM ROTAS

## React Router DOM

O React Router Dom é um pacote que permite gerenciar as rotas do React.
`npm install react-router-dom`

O compomente `<Router>` é o container onde os conteúdos das rotas serão renderizados.

O componente `<Routes>` contém a lista de rotas disponíveis.

O componente `<Route>` representa cada rota da aplicação.

```
import Menu from "components/Menu";
import Cardapio from "pages/cardapio";
import Inicio from "pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </Router>
  );
}
```

Para redirecionarmos o usuário para uma nova rota usamos o componente <Link> que
é equivalente a tag `<a>`.

`<Link to={rota.to}>{rota.label}</Link>`

Para organizar as rotas podemos utilizar rotas relativos, para isto basta aninhar as tags
<Route>.

```
export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
```

Para exibir o conteúdo de uma rota dentro de um componente assim como no angular podemos
utilizar o <Outlet>.

```
export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa.</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
```

Podemos utilizar o hook _useNavigate_ para retornar a última rota visitada
pelo usuário.

```
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTema.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <NotFoundImage />
    </div>
  );
}
```

Podemos passar parâmetros dentro de uma url utilizando _minhaUrl/:meuParametro_:

```
<Route path="prato/:id" element={<Prato />} />
```

E utilizar o hook _useParams_ para acessá-la.

```
const {id} = useParams();
```

Com o hook _useNavigate_ também podemos passar dados através da rota.

```
const navigate = useNavigate();
function redirecionarParaDetalhes(prato: typeof cardapio[0]) {
  navigate(`/prato/${prato.id}`, { state: { ...prato }, replace: true });
}
```

A propriedade replace indica se a última rota da pilha de acesso deve ser substituída pela nova rota,
é útil para evitar de usuários retornarem a área de login.

Podemos consumir estes dados através da propriedade state do hook _useLocation_.

## Conteúdo dinâmico
É possível passar conteúdo dinâmico dentro das tags do React utilizando o _ReactNode_.

```
export default function PaginaPadrao({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa.</div>
      </header>
      <div className={stylesTema.container}>
        {children}
      </div>
    </>
  );
}
```
```
<PaginaPadrao>
  <p>Este conteúdo será renderizado dentro do componente</p>
<PaginaPadrao/>
```
