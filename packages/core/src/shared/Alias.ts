export default class Alias {
  static format(valor: string): string {
    return valor.replace(/ /g, "-").toLocaleLowerCase();
  }
}
