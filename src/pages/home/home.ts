import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemStatusControllerDirective } from '../../directives/item-status-controller/item-status-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { SimpleDataProvider } from '../../providers/simple-data/simple-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myFirstContainer') container: ItemStatusControllerDirective;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private dataProvider: SimpleDataProvider) {

  }

  ionViewDidLoad() {

    setTimeout(() => {
      this.container.focusCurrent();
    });

  }

  tryPrevious() {
    this.container.previousControl();
  }


  mind(text: string) {
    this.container.evaluateErrors(this.inputValidator(text));
  }

  inputValidator(text?: string) {

    var errors = new Array<string>();

    if (!text || text.length < 3) {
      errors.push("Túl rövid szöveg");
    }

    return errors;
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
        },
        {
          name: 'own',
          disabled: true,
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
            alert(data.username + " " + data.password);
          }
        },
        {
          text: 'sup',
          handler: data => {
            alert('sup');
          }
        }
      ],
    });
    al.present();
  }

  homePageDone() {
    this.dataProvider.doWhatever("homepage");
  }

  homepageUndone() {
    this.dataProvider.doWhatever("homedown :'(");
  }

}
