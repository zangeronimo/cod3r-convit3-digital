import {
  border,
  borderZinc800,
  fontBold,
  gapY1,
  px4,
  py2,
  roundedLg,
  textLg,
  textWhite,
  textXl,
  textZinc400,
} from "@/styles";
import { Text, View } from "react-native";

type InfoProps = {
  label: string;
  children: React.ReactNode;
};

export default function Info(props: InfoProps) {
  return (
    <View style={[px4, py2, gapY1, roundedLg, border, borderZinc800]}>
      <Text style={[textXl, fontBold, textWhite]}>{props.label}</Text>
      <Text style={[textLg, textZinc400]}>{props.children}</Text>
    </View>
  );
}
