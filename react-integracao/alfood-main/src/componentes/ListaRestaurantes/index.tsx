import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { IPaginacao } from "../../interfaces/IPaginacao";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [paginaAtual, setProximaPagina] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>();
  const [hasPrevious, setHasPrevious] = useState<boolean>();
  const [busca, setBusca] = useState<String>('');

  function listarRestaurantes(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    axios
      .get<IPaginacao<IRestaurante>>(
        `http://localhost:8000/api/v1/restaurantes/?page=${paginaAtual}&search=${busca}`
      )
      .then(({ data }) => {
        setRestaurantes(data.results);
        setHasNext(!!data.next);
        setHasPrevious(!!data.previous);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }

  useEffect(() => {
    listarRestaurantes();
  }, [paginaAtual]);

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      <form
        className={style.ListaRestaurantes__formBusca}
        onSubmit={(event) => {
          setProximaPagina(1);
          listarRestaurantes(event);
        }}
      >
        <TextField
          value={busca}
          onChange={({ target }) => setBusca(target.value)}
        ></TextField>
        <Button type="submit" variant="outlined" color="primary">
          Buscar
        </Button>
      </form>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {hasPrevious && (
        <button onClick={() => setProximaPagina(paginaAtual - 1)}>
          Página anterior
        </button>
      )}
      {hasNext && (
        <button onClick={() => setProximaPagina(paginaAtual + 1)}>
          Próxima página
        </button>
      )}
    </section>
  );
};

export default ListaRestaurantes;
