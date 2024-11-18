import Event from "../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
  const errors: string[] = [];

  if (!event.alias) {
    errors.push("Alias é obrigatório");
  }
  if (!event.name) {
    errors.push("Nome é obrigatório");
  }
  if (!event.description) {
    errors.push("Descrição é obrigatória");
  }
  if (!event.date) {
    errors.push("Data é obrigatória");
  }
  if (!event.local) {
    errors.push("Local é obrigatório");
  }
  if (!event.audience || event.audience < 1) {
    errors.push("Público esperado é obrigatório");
  }

  return errors;
}
