import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { MessagesPage } from '../messages/messages';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username : string;
  public password : string;
  public urlPhoto : string;
  
  constructor(public navCtrl: NavController, public http: Http) {

  }

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  createAccount() {
    this.navCtrl.push(SignupPage, {});
  }

  signin() {
    let body = 'username='+this.username;
    body = body +'&pwd='+this.password;
    
    this.http.post('http://cesi.cleverapps.io/signin', body, {headers: this.getHeaders()}).subscribe(res => {
      if(res.status === 200){
        console.log('login succeed');
      
        this.navCtrl.push(MessagesPage, {  
          token: res.json().token    
        });
      } else {
        alert("Authentication error");
      }
    }, (err) => {
      console.log(err);
      alert("Authentication error");
    });
  }
}
