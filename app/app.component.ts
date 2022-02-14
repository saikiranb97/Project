import { Component } from '@angular/core';
import {Parse} from 'parse';
var appConfig = {
  "appId": "0ieIhFksrw6ll1uvf2UGtItAyp3GM2mX3eSWZPrX",
  "masterKey": "fW9js4EMNPHSqUgw3e3y5C1pcHk7ZZguwNetVlB3"
}
Parse.initialize("0ieIhFksrw6ll1uvf2UGtItAyp3GM2mX3eSWZPrX", "YN9HA59hXE9WvMnDw0h6FsQ2xJcnYceMGCGr5LFA");
// Parse.serverURL = 'https://parse-dashboard.back4app.com/';
Parse.serverURL = 'https://parseapi.back4app.com/';
  Parse.masterKey = appConfig.masterKey;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
