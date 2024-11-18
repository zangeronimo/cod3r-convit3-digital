import Id from "@/core/shared/Id";
import Guest from "../model/Guest";

export default function createEmptyGuest(): Partial<Guest> {
  return {
    id: Id.generate(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanions: false,
    numberOfCompanions: 0,
  };
}
