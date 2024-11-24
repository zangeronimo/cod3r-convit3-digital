import EventInfo from "@/components/event/EventInfo";
import GuestList from "@/components/event/GuestList";
import SectionTitle from "@/components/shared/SectionTitle";
import Statistics from "@/components/shared/Statistics";
import useEvent from "@/data/hooks/useEvent";
import {
  bgBlack,
  bgRed500,
  button,
  centerGrow,
  flex1,
  flexRow,
  fontBold,
  gapX2,
  gapY4,
  mt3,
  p4,
  py4,
  roundedLg,
  selfCenter,
  textWhite,
  w4_5,
  wFull,
} from "@/styles";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventDetail() {
  const params = useLocalSearchParams();
  const { selectEvent, event, removeEvent } = useEvent();
  const router = useRouter();

  useEffect(() => {
    selectEvent(`${params.id}`);
  }, [params.id]);

  const presents = event?.guests?.filter((guest) => guest.confirmed) ?? [];
  const absents = event?.guests?.filter((guest) => !guest.confirmed) ?? [];
  const total = presents.reduce((total, guest) => {
    return total + guest.numberOfCompanions + 1;
  }, 0);

  return event ? (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image
          source={{ uri: event.image }}
          style={[wFull, roundedLg, { height: 200 }]}
        />
        <EventInfo event={event} />
        <View style={[flexRow, gapX2, { marginTop: 40 }]}>
          <Statistics
            text="Expectativa"
            value={event.audience}
            image={require("@/assets/images/convidados.png")}
          />
          <Statistics
            text="Confirmações"
            value={presents.length}
            image={require("@/assets/images/confirmados.png")}
          />
          <Statistics
            text="Total"
            value={total}
            image={require("@/assets/images/acompanhantes.png")}
          />
        </View>
        <SectionTitle label="Presenças Confirmadas" />
        <GuestList guests={presents} />
        <SectionTitle label="Ausências Confirmadas" />
        <GuestList guests={absents} />
        <Pressable
          style={[button, bgRed500, w4_5, selfCenter, mt3]}
          onPress={() => {
            removeEvent(event.id);
            router.back();
          }}
        >
          <AntDesign name="delete" size={20} color="white" />
          <Text style={[fontBold, textWhite]}>Excluir Evento</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View style={[centerGrow, bgBlack]}>
      <Text style={[textWhite]}>Evento não encontrado</Text>
    </View>
  );
}
