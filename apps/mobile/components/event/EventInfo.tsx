import { gapY2 } from "@/styles";
import { View } from "react-native";
import Info from "../shared/Info";
import { Event } from "core";

type EventInfoProps = {
  event: Event;
};

export default function EventInfo(props: EventInfoProps) {
  return (
    <View style={[gapY2]}>
      <Info label="Nome">{props.event.name}</Info>
      <Info label="Data">
        {new Date(props.event.date).toLocaleDateString("pt-BR")}
        {" às "}
        {new Date(props.event.date).toLocaleTimeString("pt-BR")}
      </Info>
      <Info label="Local">{props.event.local}</Info>
      <Info label="Descrição">{props.event.description}</Info>
    </View>
  );
}
