import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

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

  createAccount() {
    this.navCtrl.push(SignupPage, {});
  }

  signin() {
    let body = 'username='+this.username;
    body = body +'&pwd='+this.password;
    
    this.http.post('https://suoqix3gpa.execute-api.eu-west-3.amazonaws.com/dev/signin', body, {headers: this.getHeaders()}).subscribe(res => {
      console.log('login succeed');
      if(res.status === 200){
        this.navCtrl.push(TabsPage, {  
          jwt: res.json().jwt    
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
