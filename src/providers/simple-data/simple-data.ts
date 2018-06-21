import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SimpleDataModel } from '../../models/simple-data-model';
import { Partner } from '../../models/partner-model';

/*
  Generated class for the SimpleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

http provider:
  https://stackoverflow.com/questions/47492475/no-provider-for-http-staticinjectorerror/47492777?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
local json file:
  https://stackoverflow.com/questions/46399228/how-to-read-a-local-file-json-in-ionic?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

With HttpClient, you don't need map(res => res.json())
(https://stackoverflow.com/questions/47564687/angular-5-json-does-not-exist-on-type-object?rq=1)

*/
@Injectable()
export class SimpleDataProvider {

  constructor(public http: HttpClient) {
  //constructor() {
    console.log('Hello SimpleDataProvider Provider');
  }

  readPartnersFromServer() {
    return this.http.get('http://172.16.1.5/webapp-api/Account/GetPartners/?json=true')
      .map(res => <Partner[]>res
        .map(x => new Partner(  x.Name, Number(x.Code) )  )
      )
  }

  readLocalFile() {
    return this.http.get('../assets/simpleDatas.json').map(res => <SimpleDataModel[]>res);
  }

  doWhatever(name: string) {
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot')
      .subscribe(data => {
        console.log(data);
    });
    //alert(`cshő ${name}, simpledataprovider vagyok`);
  }

  readFromJsonPlaceholder() {
    this.http.get('https://jsonplaceholder.typicode.com/albums')
      .subscribe(data => {
        console.log(data);
      });
  }

}
