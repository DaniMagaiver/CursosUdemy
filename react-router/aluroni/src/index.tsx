import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Cardapio from "./pages/cardapio";
import Inicio from "pages/Inicio";
import Routes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<React.StrictMode>{<Routes></Routes>}</React.StrictMode>);
