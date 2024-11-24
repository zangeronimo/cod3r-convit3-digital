import { Event } from "core";
import Info from "../shared/Info";

type EventInfoProps = {
  event: Event;
  className?: string;
};

export default function EventInfo(props: EventInfoProps) {
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{props.event.alias}:</span>
        <span className="text-xl text-zinc-300">{props.event.name}</span>
      </div>
      <div className="flex gap-2">
        <Info label="Data:">
          <span>
            {new Date(props.event.date!).toLocaleDateString()}
            {" às "}
            {new Date(props.event.date!).toLocaleTimeString()}
          </span>
        </Info>
        <Info label="Local:">{props.event.local}</Info>
      </div>
      <Info label="Descrição">{props.event.description}</Info>
    </div>
  );
}
