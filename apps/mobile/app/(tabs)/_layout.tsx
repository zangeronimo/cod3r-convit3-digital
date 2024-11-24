import { colors } from "@/styles/colors";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  function options(label: string, icon: string): any {
    return {
      headerShown: false,
      tabBarLabel: label,
      tabBarActiveTintColor: colors.blue[500],
      tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      tabBarInactiveTintColor: colors.zinc[400],
      tabBarStyle: {
        backgroundColor: colors.zinc[950],
        borderTopWidth: 0,
      },
      tabBarIcon: ({ focused }: any) => (
        <AntDesign
          name={icon as any}
          size={24}
          color={focused ? colors.blue[500] : colors.zinc[400]}
        />
      ),
    };
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={options("Início", "home")} />
      <Tabs.Screen name="eventos" options={options("Eventos", "calendar")} />
    </Tabs>
  );
}
