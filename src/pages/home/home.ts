import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemStatusControllerDirective } from '../../directives/item-status-controller/item-status-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myFirstContainer') container2: ItemStatusControllerDirective;
  constructor(public navCtrl: NavController) {

  }

  tryPrevious() {
    this.container2.controlUndone();
  }

  inputValidator(text: string) {
    return text.length > 2;
  }

  elso() {
    alert("első lement");
  }

}
