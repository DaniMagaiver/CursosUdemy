import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
import Cesta from "./src/telas/cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import mock from "./src/mocks/cesta";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold
  });

  if(!fontCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
