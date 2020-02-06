import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

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
    
    this.http.post('https://suoqix3gpa.execute-api.eu-west-3.amazonaws.com/dev/signup', body, {headers: this.getHeaders()}).subscribe(res => {
      if(res.status === 200){
        this.navCtrl.pop();
      } else {
        console.log("Error signup");
      }
    }, (err) => {
      console.log(err);
      alert("Create account error");
    });
  }
}
