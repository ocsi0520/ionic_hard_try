import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseHandlerProvider } from '../../providers/database-handler/database-handler';

/**
 * Generated class for the DatabaseTryingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-database-trying',
  templateUrl: 'database-trying.html',
})
export class DatabaseTryingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dbHandler: DatabaseHandlerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabaseTryingPage');
    this.dbHandler.create();
  }

}
