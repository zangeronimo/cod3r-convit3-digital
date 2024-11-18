export default class Password {
  static generate(length: number = 8): string {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = lower.toUpperCase();
    const numbers = "0123456789";
    const specialChars = "!@#$%&*";
    const groups = [lower, upper, numbers, specialChars];
    const password = [];

    for (let i = 0; i < length; i++) {
      const group = groups[Math.floor(Math.random() * groups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }

    return password.join("");
  }
}
