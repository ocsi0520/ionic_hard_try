import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the GuestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {
  firstText: string;
  lastText: string;
  firstGroup: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstText = navParams.get('itemFirst');
    this.lastText = navParams.get('itemLast');
    this.firstGroup = new FormBuilder().group({
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.min(3))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

  sayHello() {
    let result: string = `${this.firstGroup.get('gender').value} ----- ${this.firstGroup.get('age').value}`
    alert(result);
  }

}
