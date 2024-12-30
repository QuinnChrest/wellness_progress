export class Record {
  Date?: Date;
  Weight?: number;
  Steps?: number;

  constructor(init?: Partial<Record>) {
    Object.assign(this, init);
    if (this.Date) {
      this.Date = new Date(this.Date); // Ensure `Date` is a Date object
    }
  }
}
