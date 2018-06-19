import { Component, EventEmitter, Output, Input, ViewChild, HostListener } from '@angular/core';
import { IStatus, Status } from '../../interfaces/status';
import { Keyboard } from 'ionic-angular';


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

  errors: Array<string>;

  currentStatus: Status;

  @ViewChild('inputTextBox') inputTextBox;
  
  focus(): void {
    setTimeout(() => {
      this.inputTextBox.setFocus();
    });
  }

  constructor(public keyboard: Keyboard) {
    this.labelText = 'labelText';
    this.buttonText = 'buttonText';
    this.inputPlaceholderText = "inputPlaceholderText "
    this.readyText = "readyText ";
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
        //this.focus();
        break;

      case Status.Ready:
        break;

    }
  }

  setErrors(errors: Array<string>) {
    this.errors = errors;
  }

  //https://stackoverflow.com/questions/37362488/how-can-i-listen-for-keypress-event-on-the-whole-page
  @HostListener('document:keypress', ['$event'])
  keyPressHandler(event: KeyboardEvent) {
    if (this.currentStatus == Status.Active && event.which === 13) {
      event.stopImmediatePropagation();
      this.finishInput();
    }
  }

  finishInput() {
    this.finish.emit(this.inputText);
  }
}
