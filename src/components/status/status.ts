import { Component } from '@angular/core';

/**
 * Generated class for the StatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'status',
  templateUrl: 'status.html'
})
export class StatusComponent {

  text: string;

  constructor() {
    console.log('Hello StatusComponent Component');
    this.text = 'Hello World';
  }

}
