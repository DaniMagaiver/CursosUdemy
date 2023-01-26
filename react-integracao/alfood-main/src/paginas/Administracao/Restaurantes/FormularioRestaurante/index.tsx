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
import { useParams } from "react-router-dom";
import http from "../../../../services";
import IRestaurante from "../../../../interfaces/IRestaurante";
import { Link as RouterLink} from 'react-router-dom';

export default function FormularioRestaurante() {
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
      <Box>
        <Container maxWidth="lg" sx={{ mt: 1 }}>
          <Paper sx={{ padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexGrow: 1
              }}
            >
              <Box component="form" sx={{width: '100%'}} onSubmit={aoSubmeterForm}>
                <Typography component="h1" variant="h6">
                  Formulario de Restaurantes
                </Typography>
                <TextField
                  value={nomeRestaurante}
                  onChange={(evento) => setNomeRestaurante(evento.target.value)}
                  label="Nome do Restaurante"
                  variant="standard"
                  fullWidth
                  required
                ></TextField>
                <Button
                  sx={{ marginTop: 1 }}
                  fullWidth
                  type="submit"
                  variant="outlined"
                >
                  Salvar
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
