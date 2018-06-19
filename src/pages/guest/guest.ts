import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstText = navParams.get('itemFirst');
    this.lastText = navParams.get('itemLast');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestPage');
  }

}
