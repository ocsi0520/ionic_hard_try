import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
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

  @ViewChild('inputTextBox') inputTextBox;
  
  focus(): void {
    setTimeout(() => this.inputTextBox.setFocus());
  }

  constructor() {
    this.labelText = 'Here you can write';
    this.buttonText = 'Ok';
    this.inputPlaceholderText = "Place to write"
    this.readyText = "InputControl is ready";
  }

  empty(): void {
    this.inputText='';  
  }

  setStatus(status: Status): void {
    this.currentStatus = status;
    switch (status) {
      case Status.NotActive:
        break;

      case Status.Active:
        this.focus();
        break;

      case Status.Ready:
        break;

    }
  }
}
