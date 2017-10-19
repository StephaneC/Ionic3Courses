import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  public message : string;
  public messages : any;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
  }

  load() {
    this.http.post('http://cesi.cleverapps.io/messages', {}, 
          {headers : {'token':this.navParams.get('token')}}).subscribe(res => {
            console.log(res._body);
            this.messages = res._body; 
          }, (err) => {
            console.log(err);
            alert("error calling http " + err);
          });
  }

  postMessage() {
    this.http.post('http://cesi.cleverapps.io/messages', {}, 
      {headers : {'token':this.navParams.get('token')}}).subscribe(res => {
        console.log(res._body);
        this.message = '';
      }, (err) => {
        console.log(err);
        alert("error calling http " + err);
      });
  }

 

}
