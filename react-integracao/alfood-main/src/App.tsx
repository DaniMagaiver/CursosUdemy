import PaginaBaseAdmin from "paginas/Administracao/PaginaBaseAdmin";
import { AdministracaoPratos } from "paginas/Administracao/Pratos";
import FormularioPrato from "paginas/Administracao/Pratos/FormularioPratos";
import { Routes, Route } from "react-router-dom";
import AdministracaoRestaurantes from "./paginas/Administracao/Restaurantes";
import FormularioRestaurantes from "./paginas/Administracao/Restaurantes/FormularioRestaurante";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="admin" element={<PaginaBaseAdmin/>}>
        <Route
          path="restaurantes"
          element={<AdministracaoRestaurantes />}
        />
        <Route
          path="restaurantes/novo"
          element={<FormularioRestaurantes />}
        />
        <Route
          path="restaurantes/:id"
          element={<FormularioRestaurantes />}
        />
        <Route
          path="pratos"
          element={<AdministracaoPratos />}
        />
        <Route
          path="pratos/novo"
          element={<FormularioPrato />}
        />
      </Route>
    </Routes>
  );
}

export default App;
