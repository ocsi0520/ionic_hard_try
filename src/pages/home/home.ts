import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemStatusControllerDirective } from '../../directives/item-status-controller/item-status-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { SimpleDataProvider } from '../../providers/simple-data/simple-data';
import { GuestPage } from '../guest/guest';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //__QUESTION__: a konténer feladata, hogy a benne lévő komponensek értékeit tárolja, majd azt szolgáltassa később a page-nek
  //              vagy a page felelős már alapból ezért?
  private values: Array<any> = new Array<any>();
  @ViewChild('myFirstContainer') container: ItemStatusControllerDirective;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  showableLabels: Array<string>=new Array<string>();
  showableValues: Array<number> = new Array<number>();
  doughnutChart: Chart;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private dataProvider: SimpleDataProvider) {

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.container.focusCurrent();
    });

    this.dataProvider.readLocalFile().subscribe((res) => {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].name + " " + res[i].value);
        this.showableLabels.push(res[i].name);
        this.showableValues.push(res[i].value);
      }
      this.createChart();
    });

  }

  createChart(){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      
      type: 'doughnut',
      data: {
        //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        labels: this.showableLabels,
        datasets: [{
          label: '# of Votes',
          data: this.showableValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          hoverBackgroundColor: [
            // "#FF6384",
            // "#36A2EB",
            // "#FFCE56",
            // "#FF6384",
            // "#36A2EB",
            // "#FFCE56"
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }]
      }

    });
  }

  tryPrevious() {
    this.container.previousControl();
  }


  mind(text: string) {
    var errors: Array<string> = this.inputValidator(text);
    if (this.container.evaluateErrors(errors)) {
      this.values.push(text);
    }
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
    this.navCtrl.push(GuestPage, {
      itemFirst: this.values[0],
      itemLast: this.values[this.values.length - 1]
    }, {
        animate: true,
      });
  }

  homepageUndone() {
    this.dataProvider.doWhatever("homedown :'(");
  }

}
