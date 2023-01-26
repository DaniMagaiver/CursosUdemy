import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  TextField,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import IRestaurante from "interfaces/IRestaurante";
import { Link as RouterLink } from "react-router-dom";
import http from "services";

export default function PaginaBaseAdmin() {
  const parametros = useParams();

  useEffect(() => {
    if (parametros.id) {
      http
        .get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then((resposta) => setNomeRestaurante(resposta.data.nome));
    }
  }, []);

  const [nomeRestaurante, setNomeRestaurante] = useState("");

  function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (parametros.id) {
      http
        .put(`restaurantes/${parametros.id}/`, {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante atualizado com sucesso");
        });
    } else {
      http
        .post("restaurantes/", {
          nome: nomeRestaurante,
        })
        .then(() => {
          alert("Restaurante cadastrado com sucesso");
        });
    }
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">Administração</Typography>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Link component={RouterLink} to="/admin/restaurantes">
                <Button sx={{ my: 2, color: "white" }}>Restaurantes</Button>
              </Link>
              <Link component={RouterLink} to="/admin/restaurantes/novo">
                <Button sx={{ my: 2, color: "white" }}>
                  Novo Restaurantes
                </Button>
              </Link>
              <Link component={RouterLink} to="/admin/pratos">
                <Button sx={{ my: 2, color: "white" }}>Pratos</Button>
              </Link>
              <Link component={RouterLink} to="/admin/pratos/novo">
                <Button sx={{ my: 2, color: "white" }}>Novo Prato</Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ padding: 2 }}>
            <Outlet/>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
