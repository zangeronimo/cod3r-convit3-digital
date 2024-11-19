import Guest from "@/core/event/model/Guest";
import GuestItem from "./GuestItem";

type GuestListProps = {
  guests: Guest[];
};

export default function GuestList(props: GuestListProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.guests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  );
}
