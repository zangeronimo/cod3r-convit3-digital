import { createContext, useCallback, useEffect, useState } from "react";
import { Event } from "core";
import useAPI from "../hooks/useAPI";
import useLocalStorage from "../hooks/useLocalStorage";

type EventContextProps = {
  events: Event[];
  event: Event | null;
  selectEvent(id: string): void;
  removeEvent(id: string): void;
  addEventViaQrCode(qrcode: string): void;
};

const EventContext = createContext<EventContextProps>({} as EventContextProps);

export function EventContextProvider(props: any) {
  const [state, setState] = useState({ events: [], event: null } as {
    events: Event[];
    event: Event | null;
  });
  const { httpPost } = useAPI();
  const { saveItem, getItem } = useLocalStorage();

  const selectEvent = async (id: string) => {
    const event = state.events.find((event) => event.id === id) ?? null;
    const eventLoaded = await loadEvent(id, event?.password || "");
    setState((old) => ({ ...old, event: eventLoaded ?? null }));
  };

  const removeEvent = useCallback((id: string) => {
    const events = state.events.filter((event) => event.id !== id);
    saveItem("events", events);
    setState((old) => ({ ...old, events }));
  }, []);

  const loadEvent = async (id: string, password: string) => {
    const event = await httpPost("/events/access", {
      id,
      password,
    });
    return event;
  };

  const loadEvents = async () => {
    const events = await getItem("events");
    setState((old) => ({ ...old, events: events || [] }));
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const addEventViaQrCode = useCallback(async (qrcode: string) => {
    try {
      const data = JSON.parse(qrcode);
      const event = await loadEvent(data.id, data.senha ?? data.password);
      if (!event) {
        return removeEvent(data.id);
      }

      const events = state.events.filter((event) => event.id !== data.id);
      events.push(event);

      saveItem("events", events);
      setState((old) => ({ ...old, events }));
    } catch (error: any) {
      alert(JSON.stringify("Erro: " + error));
    }
  }, []);
  return (
    <EventContext.Provider
      value={{
        events: state.events,
        event: state.event,
        selectEvent,
        removeEvent,
        addEventViaQrCode,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContext;
