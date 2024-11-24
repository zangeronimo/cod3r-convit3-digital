import {
  bgZinc900,
  flex1,
  fontBlack,
  gapY2,
  itemsCenter,
  p4,
  roundedLg,
  text2Xl,
  textCenter,
  textWhite,
  textZinc400,
} from "@/styles";
import { Image, Text, View } from "react-native";

type StatisticsProps = {
  text: string;
  value: any;
  image: any;
};

export default function Statistics(props: StatisticsProps) {
  return (
    <View style={[flex1, itemsCenter, bgZinc900, p4, roundedLg]}>
      <Image
        source={props.image}
        style={{ width: 80, height: 80, marginTop: -40 }}
      />
      <View style={[itemsCenter, gapY2]}>
        <Text style={[textZinc400, textCenter]}>{props.text}</Text>
        <Text style={[textWhite, text2Xl, fontBlack]}>{props.value}</Text>
      </View>
    </View>
  );
}
