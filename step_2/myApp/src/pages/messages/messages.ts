import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

//public messages: any;

  constructor(public navCtrl: NavController, public http: Http) {
  }

 

}
