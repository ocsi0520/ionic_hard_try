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
  @Input() labelText: string;
  @Input() inputPlaceholderText: string;
  @Input() buttonText: string;
  @Input() readyText: string;

  @Input() inputText: string;

  @Output() finish: EventEmitter<string> = new EventEmitter<string>();

  currentStatus: Status;

  ngAfterViewInit(){
  }

  constructor() {
    this.labelText = 'labelText';
    this.inputText = 'ez egy input text';
    this.buttonText = 'ez egy button text';
    this.inputPlaceholderText = "vmi"
    this.readyText = "readytextes téma";
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
    alert("lefutok");
    this.finish.emit(this.inputText);
  }
}
