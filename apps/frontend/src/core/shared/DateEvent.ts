export default class DateEvent {
  static format(date: Date = new Date()): string {
    const pad = (n: number) => n.toString().padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  static parse(date: string): Date {
    const [fullDate, fullTime] = date.split("T");
    const [year, month, day] = fullDate.split("-");
    const [hour, minute] = fullTime.split(":");
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  }
}

console.log(DateEvent.format(new Date()));
console.log(DateEvent.parse("2024-06-15T11:25"));
