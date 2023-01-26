import { StyleSheet, View } from "react-native";
import Detalhes from "../componentes/detalhes";

import Topo from "../componentes/topo";
import cesta from "../../mocks/cesta";

export default function Cesta({topo, detalhes}: typeof cesta) {
  return (
    <>
      <Topo {...topo}/>
      <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  }
});
