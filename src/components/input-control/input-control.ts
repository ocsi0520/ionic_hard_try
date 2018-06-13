import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IStatus, Status } from '../../interfaces/status';
/**
 * Generated class for the InputControlComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'input-control',
  templateUrl: 'input-control.html'
})
export class InputControlComponent implements IStatus {
  @Input() validate(value: any): boolean { return true; }
  @Input() labelText: string;
  @Input() inputPlaceholderText: string;
  @Input() buttonText: string;

  @Output() done: EventEmitter<any> = new EventEmitter();
  @Output() inputText: string;

  value: any;
  currentStatus: Status;


  constructor() {
    //this.setStatus(Status.NotActive);
    //this.currentClass = 'active';
    this.labelText = 'labelText';
    this.inputText = 'ez egy input text';
    this.buttonText = 'ez egy button text';
    this.value = "bla";
    this.inputPlaceholderText="vmi"
  }

  empty(): void {
    
  }
  setStatus(status: Status): void {
    this.currentStatus = status;
    switch (status) {
      case Status.NotActive:
        break;

      case Status.Active:
        break;

      case Status.Ready:
        break;

    }
  }

  private isTerminable() {
    return this.currentStatus == Status.Active
      && this.validate(this.value);

  }

  gotClicked() {
    if (this.isTerminable()) {
      this.done.emit();
    }
  }

}
