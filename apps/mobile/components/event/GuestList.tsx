import { Guest } from "core";
import { Text, View } from "react-native";
import {
  border,
  borderZinc800,
  gapY2,
  px4,
  py2,
  roundedMd,
  textLg,
  textSm,
  textWhite,
  textZinc400,
} from "@/styles";

type GuestListProps = {
  guests: Guest[];
};

export default function GuestList(props: GuestListProps) {
  return (
    <View>
      {props.guests && props.guests.length > 0 ? (
        <View style={gapY2}>
          {props.guests.map((guest) => (
            <View
              key={guest.id}
              style={[border, borderZinc800, roundedMd, px4, py2]}
            >
              <Text style={[textWhite, textLg]}>{guest.name}</Text>
              <Text style={[textZinc400, textSm]}>{guest.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={[textZinc400, textLg]}>Ninguém por aqui ainda...</Text>
      )}
    </View>
  );
}
