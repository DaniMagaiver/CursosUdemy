import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import IPrato from "interfaces/IPrato";
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import http from "services";

export function AdministracaoPratos(){
    const [pratos, setPratos] = useState<IPrato[]>([]);

  useLayoutEffect(() => {
    http
      .get<IPrato[]>("pratos/")
      .then(({ data }) => {
        setPratos(data);
      });
  }, []);

  function excluir(prato:IPrato){
    http.delete(`pratos/${prato.id}/`).then(() => {
      const listaPrato = pratos.filter(({id}) => id !== prato.id);
      setPratos(listaPrato);
    })
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pratos.map((prato) => (
              <TableRow key={prato.id}>
                <TableCell>{prato.nome}</TableCell>
                <TableCell>{prato.descricao}</TableCell>
                <TableCell>{prato.tag}</TableCell>
                <TableCell>[<a href={prato.imagem} target="_blank" rel="noreferer">Ver imagem</a>]</TableCell>
                <TableCell>
                  <Link to={`/admin/pratos/${prato.id}`}>
                    editar
                  </Link>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="error" onClick={() => excluir(prato)}>Excluir</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}