import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

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

  click() {
    let body = 'username='+this.username;
    body = body +'&pwd='+this.password;
    body = body + '&urlPhoto='+this.urlPhoto;
    
    this.http.post('http://cesi.cleverapps.io/signup', body, {headers: this.getHeaders()}).subscribe(res => {
      console.log('create account succeed');
      if(res.status === 200){
        alert('Account created. Let\'s connect');
      } else {
        alert("Account created error");
      }
    }, (err) => {
      console.log(err);
      alert("Account created error");
    });
  }
}
