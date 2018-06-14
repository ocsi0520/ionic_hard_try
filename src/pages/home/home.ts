import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemStatusControllerDirective } from '../../directives/item-status-controller/item-status-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myFirstContainer') container: ItemStatusControllerDirective;
  elsoValue: string="asd";
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  tryPrevious() {
    this.container.previousControl();
  }

  elso(text: string) {
    alert("lefutottam és ezt kaptam: " + text);
    if (this.inputValidator(text)) {
      this.container.nextControl();
    }
    else {
      this.presentPrompt();
    }
  }

  inputValidator(text: string) {
    if (text.length > 2)
      return true;
    else {
      this.presentPrompt();
      return false;
    }
  }

  presentPrompt() {
    let al = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            alert(data);
          }
        }
      ]
    });
    al.present();
  }

}
