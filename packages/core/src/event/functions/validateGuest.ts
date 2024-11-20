import Guest from "../model/Guest";

export default function validateGuest(partialGuess: Partial<Guest>): string[] {
  const errors: string[] = [];

  if (!partialGuess.name) {
    errors.push("Nome é obrigatório");
  }
  if (!partialGuess.email) {
    errors.push("E-mail é obrigatório");
  }

  return errors;
}
