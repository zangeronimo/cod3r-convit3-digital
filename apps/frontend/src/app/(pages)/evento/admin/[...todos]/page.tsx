"use client";
import Dashboard from "@/components/event/Dashboard";
import FormPassword from "@/components/event/FormPassword";
import { Event, Guest } from "core";
import { use, useEffect, useState } from "react";

export default function PageAdminEvento(props: any) {
  const params: any = use(props.params);
  const id = params.todos[0];
  const [event, setEvent] = useState<Event | null>(null);
  const [password, setPassword] = useState(params.todos[1] ?? null);

  const presents = event?.guests.filter((guest) => guest.confirmed) as Guest[];
  const absents = event?.guests.filter((guest) => !guest.confirmed) as Guest[];

  const totalCompanions = presents.reduce((total: number, guest: Guest) => {
    return total + guest.numberOfCompanions + 1;
  }, 0);

  function loadEvent() {
    const event = {
      id,
      alias: "nome-do-evento",
      name: "Nome do Evento",
      guests: [] as Guest[],
      date: new Date(),
      local: "Sítio da vó lu",
      audience: 100,
      image:
        "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/farm-animals_ver_1.png",
      description:
        "lsdkfj sçd fhçsld fhçsd hfças hfçajs hf~saj dfwpeoi fsçljb vçsjvçsi vsljd çsjdf hsçdljh",
    } as Event;
    setEvent(event);
  }

  useEffect(() => loadEvent(), [id, password]);

  return (
    <div className="flex flex-col items-center">
      {event ? (
        <Dashboard
          presents={presents}
          absents={absents}
          totalCompanions={totalCompanions ?? 0}
          event={event}
        />
      ) : (
        <FormPassword />
      )}
    </div>
  );
}
