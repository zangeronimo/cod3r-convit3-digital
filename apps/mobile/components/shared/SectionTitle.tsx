import { fontBold, py4, selfStart, textXl, textZinc400 } from "@/styles";
import { Text } from "react-native";

type SectionTitleProps = {
  label: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>
      {props.label}
    </Text>
  );
}
