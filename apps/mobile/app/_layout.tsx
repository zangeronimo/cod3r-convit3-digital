import { EventContextProvider } from "@/data/contexts/EventContext";
import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <EventContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(stack)/qrcode"
          options={{
            headerShown: true,
            title: "Leitor de QR Code",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900],
            },
          }}
        />
        <Stack.Screen
          name="(stack)/events/[id]"
          options={{
            title: "Detalhe do Evento",
            headerBackTitle: "Voltar",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.zinc[900],
            },
          }}
        />
      </Stack>
    </EventContextProvider>
  );
}
