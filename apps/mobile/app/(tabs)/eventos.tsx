import useEvent from "@/data/hooks/useEvent";
import { alignCenter, bgBlack, flex1, gapY4, p4, py8 } from "@/styles";
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import EventCard from "../../components/event/EventCard";
import { useRouter } from "expo-router";
import WithoutEvent from "@/components/event/WithoutEvent";
import NewEvent from "@/components/event/NewEvent";

export default function Eventos() {
  const { events } = useEvent();
  const router = useRouter();

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      {events.length === 0 && <WithoutEvent />}
      <ScrollView contentContainerStyle={[gapY4, py8, alignCenter]}>
        {events.map((event) => (
          <Pressable
            key={event.id}
            onPress={() => router.push(`/events/${event.id}`)}
          >
            <EventCard event={event} />
          </Pressable>
        ))}
        <NewEvent />
      </ScrollView>
    </SafeAreaView>
  );
}
