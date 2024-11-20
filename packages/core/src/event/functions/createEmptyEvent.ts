import Id from "../../shared/Id";
import Event from "../model/Event";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.generate(),
    name: "",
    description: "",
    date: new Date(),
    local: "",
    audience: 1,
    image: "",
    imageBackground: "",
  };
}
