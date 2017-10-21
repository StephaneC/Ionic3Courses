import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

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

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  login() {
    let body = 'username='+this.username+'&pwd='+this.password;

    this.http.post('http://cesi.cleverapps.io/signin', body, {headers: this.getHeaders()}).subscribe(res => {
      console.log('login succeed');
      this.navCtrl.push(MessagesPage, {
        token: res.json().token 
      });
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });

  }

  createAccount() {
    let body = 'username='+this.username+'&pwd='+this.password;
    
    this.http.post('http://cesi.cleverapps.io/signup', body, {headers: this.getHeaders()}).subscribe(res => {
      console.log('create account succeed');

      alert('Account created. Let\'s connect');
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });
  }
}
