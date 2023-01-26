import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "services";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function AdministracaoRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useLayoutEffect(() => {
    http
      .get<IRestaurante[]>("restaurantes/")
      .then(({ data }) => {
        setRestaurantes(data);
      });
  }, []);

  function excluir(restaurante:IRestaurante){
    http.delete(`restaurantes/${restaurante.id}/`).then(() => {
      const listaRestaurante = restaurantes.filter(({id}) => id !== restaurante.id);
      setRestaurantes(listaRestaurante);
    })
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantes.map((restaurante) => (
              <TableRow key={restaurante.id}>
                <TableCell>{restaurante.nome}</TableCell>
                <TableCell>
                  <Link to={`/admin/restaurantes/${restaurante.id}`}>
                    editar
                  </Link>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
