import { Dimensions, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/texto";
import topo from "../../../../assets/topo.png";
import cesta from "../../../mocks/cesta";

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }: typeof cesta.topo) {
  return (
    <>
      <Image style={estilos.topo} source={topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
