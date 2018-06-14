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

  tryPrevious() {
    this.container.previousControl();
  }


  mind(text: string) {
      this.container.nextControl(!this.inputValidator(text));
  }

  inputValidator(text?: string) {

    if (text !== undefined && text.length > 3)
      return true;
    else {
      this.tooShortMessage(text, 3);
      return false;
    }
  }


  tooShortMessage(text: string, minLength: number) {
    //let al = this.alertCtrl.create({
    //  message: `A megadott szöveg nem éri el a ${minLength} hosszt`,
    //  subTitle: "Túl kevés.",
    //  title: "Hiba!",
    //  buttons: [
    //    {
    //      text: "okcsá"
    //    }]
    //});
    //al.present();
    alert(`a szöveg hossza csak ${minLength} hosszú, ami túl kevés :( sosad`);
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
