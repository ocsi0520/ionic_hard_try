import { Component, EventEmitter, Output, Input, ContentChild, ViewChild } from '@angular/core';
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

  @Output() done: EventEmitter<string> = new EventEmitter();
  
  @Output() inputText: string;

  value: any;
  currentStatus: Status;

  ngAfterViewInit(){
  }

  constructor() {
    this.labelText = 'labelText';
    this.inputText = 'ez egy input text';
    this.buttonText = 'ez egy button text';
    this.inputPlaceholderText="vmi"
  }

  empty(): void {
    this.inputText='';  
  }

  setStatus(status: Status): void {
    this.currentStatus = status;
    /*switch (status) {
      case Status.NotActive:
        break;

      case Status.Active:
        break;

      case Status.Ready:
        break;

    }*/
  }

  gotClicked() {
    if (this.validate(this.inputText)) {
      this.done.emit(this.inputText);
    }
    else{
      alert("Hibás bemenet!");
    }
  }

}
