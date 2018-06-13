import { EventEmitter } from "@angular/core";

export enum Status {
  NotActive,
  Active,
  Ready
}

//nem lehet dekorátorokat hozzáadni:
//https://stackoverflow.com/questions/46064339/how-to-interface-output-and-input-decorators?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
export interface IStatus {
  empty(): void;
  setStatus(status: Status): void;
  done: EventEmitter<any>;
  value: any;
  validate(value: any): boolean;
}
