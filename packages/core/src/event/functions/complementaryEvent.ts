import Id from "../../shared/Id";
import Event from "../model/Event";
import validateEvent from "./validateEvent";
import Password from "../../shared/Password";

export default function complementaryEvent(
  partialEvent: Partial<Event>
): Event {
  const errors = validateEvent(partialEvent);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  const event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.generate(),
    password: partialEvent.password ?? Password.generate(20),
    audience: +(partialEvent.audience ?? 1),
  } as Event;

  return event;
}
