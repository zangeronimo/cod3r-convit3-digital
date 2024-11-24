import {
  alignCenter,
  bgZinc900,
  fontBold,
  p4,
  roundedMd,
  textCenter,
  textLg,
  textWhite,
  textXs,
  textZinc400,
  w9_10,
  wFull,
} from "@/styles";
import { Event } from "core";
import { View, Text, Image } from "react-native";

type EventCardProps = {
  event: Event;
};

export default function EventCard(props: EventCardProps) {
  return (
    <View style={[bgZinc900]}>
      <Image
        source={{ uri: props.event.image }}
        style={[{ height: 150 }, wFull, roundedMd]}
      />
      <View style={[p4, alignCenter]}>
        <Text style={[textWhite, fontBold, textLg, textCenter]}>
          {props.event.name}
        </Text>
        <Text style={[textZinc400, textXs, textCenter, w9_10]}>
          {props.event.description}
        </Text>
      </View>
    </View>
  );
}
