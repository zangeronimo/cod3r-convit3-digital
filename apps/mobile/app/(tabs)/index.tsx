import { bgBlack, centerGrow } from "@/styles";
import { ImageBackground } from "react-native";
import Logo from "../../components/template/Logo";

export default function Index() {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[centerGrow, bgBlack]}
    >
      <Logo />
    </ImageBackground>
  );
}
