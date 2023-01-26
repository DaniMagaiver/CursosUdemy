import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import IRestaurante from "interfaces/IRestaurante";
import ITag from "interfaces/ITag";
import React, { useEffect, useState } from "react";
import http from "services";

export default function FormularioPrato() {
  const [nomePrato, setNomePrato] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("");
  const [restaurante, setRestaurante] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [imagem, setImagem] = useState<File | null>(null);
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http.get<{ tags: ITag[] }>("tags/").then(({ data }) => setTags(data.tags));
    http
      .get<IRestaurante[]>("restaurantes/")
      .then(({ data }) => setRestaurantes(data));
  }, []);

  function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const formData = new FormData();
    formData.append("nome", nomePrato);
    formData.append("descricao", descricao);
    formData.append("restaurante", restaurante);
    formData.append("tag", tag);
    if (imagem) {
      formData.append("imagem", imagem);
    }

    http
      .post("pratos/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        setNomePrato("");
        setDescricao("");
        setTag("");
        setRestaurante("");
        setImagem(null);
        alert("Prato cadastrado com sucesso");
      })
      .catch((erro) => console.log(erro));
  }

  function selecionarArquivo(evento: React.ChangeEvent<HTMLInputElement>) {
    if (evento.target.files?.length) {
      setImagem(evento.target.files[0]);
    } else {
      setImagem(null);
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
                flexGrow: 1,
              }}
            >
              <Box
                component="form"
                sx={{ width: "100%" }}
                onSubmit={aoSubmeterForm}
              >
                <Typography component="h1" variant="h6">
                  Formulario de Pratos
                </Typography>
                <TextField
                  value={nomePrato}
                  onChange={(evento) => setNomePrato(evento.target.value)}
                  label="Nome do Prato"
                  variant="standard"
                  fullWidth
                  required
                  margin="dense"
                ></TextField>
                <TextField
                  value={descricao}
                  onChange={(evento) => setDescricao(evento.target.value)}
                  label="Descrição do Prato"
                  variant="standard"
                  fullWidth
                  required
                  margin="dense"
                ></TextField>
                <FormControl margin="dense" fullWidth>
                  <InputLabel id="select-tag">Tag</InputLabel>
                  <Select
                    labelId="select-tag"
                    value={tag}
                    onChange={(evento) => setTag(evento.target.value)}
                  >
                    {tags.map((tag) => (
                      <MenuItem key={tag.id} value={tag.value}>
                        {tag.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl margin="dense" fullWidth>
                  <InputLabel id="select-restaurante">Restaurante</InputLabel>
                  <Select
                    labelId="select-restaurante"
                    value={restaurante}
                    onChange={(evento) => setRestaurante(evento.target.value)}
                  >
                    {restaurantes.map((restaurante) => (
                      <MenuItem key={restaurante.id} value={restaurante.id}>
                        {restaurante.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <input type="file" onChange={selecionarArquivo} />
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
