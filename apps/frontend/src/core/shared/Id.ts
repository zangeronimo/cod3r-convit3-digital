import crypto from "crypto";

export default class Id {
  static generate(): string {
    return crypto.randomUUID();
  }
}
