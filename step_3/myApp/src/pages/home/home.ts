import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { MessagesPage } from '../messages/messages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username : string;
  public password : string;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  login() {
    this.http.post('http://cesi.cleverapps.io/signin', {}, {}).subscribe(res => {
      console.log('login succeed');
      this.navCtrl.push(MessagesPage, {
        token: res._body     
      });
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });

  }

  createAccount() {
    this.http.post('http://cesi.cleverapps.io/signup', {}, {}).subscribe(res => {
      console.log('login succeed');
      this.navCtrl.push(MessagesPage, {
        token: res._body    
      });
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });
  }
}
