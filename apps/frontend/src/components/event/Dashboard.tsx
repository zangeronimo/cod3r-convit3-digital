import Event from "@/core/event/model/Event";
import EventInfo from "./EventInfo";
import QrCodeForMobile from "./QrCodeForMobile";
import Statistics from "../shared/Statistics";
import Guest from "@/core/event/model/Guest";
import GuestList from "./GuestList";

type DashboardProps = {
  event: Event;
  presents: Guest[];
  absents: Guest[];
  totalCompanions: number;
};

export default function Dashboard(props: DashboardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <EventInfo event={props.event} className="flex-1" />
        <QrCodeForMobile event={props.event} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Statistics
          text="Expectativa de Convidados:"
          value={props.event.audience}
          image="/icones/convidados.svg"
        />
        <Statistics
          text="Confirmações:"
          value={props.presents.length}
          image="/icones/confirmados.svg"
        />
        <Statistics
          text="Total Confirmado:"
          value={props.totalCompanions}
          image="/icones/acompanhantes.svg"
        />
      </div>

      <button className="button blue self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <GuestList guests={props.presents} />
      <span className="flex py-2 text-xl font-bold text-white/80">
        Convidados que confirmaram AUSÊNCIA
      </span>
      <GuestList guests={props.absents} />
    </div>
  );
}
