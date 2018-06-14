import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SimpleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

http provider:
  https://stackoverflow.com/questions/47492475/no-provider-for-http-staticinjectorerror/47492777?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
local json file:
  https://stackoverflow.com/questions/46399228/how-to-read-a-local-file-json-in-ionic?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

*/
@Injectable()
export class SimpleDataProvider {

  constructor(public http: HttpClient) {
  //constructor() {
    console.log('Hello SimpleDataProvider Provider');
  }

  doWhatever(name: string) {
    alert(`cshő ${name}, simpledataprovider vagyok`);
  }

}
