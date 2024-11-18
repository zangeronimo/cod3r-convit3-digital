import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function complementaryGuest(
  partialGuess: Partial<Guest>
): Guest {
  const errors = validateGuest(partialGuess);
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
  const numberOfCompanions = partialGuess.numberOfCompanions ?? 0;
  const hasCompanions =
    partialGuess.hasCompanions &&
    partialGuess.confirmed &&
    numberOfCompanions > 0;

  const guest = {
    ...partialGuess,
    confirmed: partialGuess.confirmed,
    hasCompanions,
    numberOfCompanions: hasCompanions ? numberOfCompanions : 0,
  } as Guest;

  return guest;
}
