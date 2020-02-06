import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public users: any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.load(null);
  }

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  localStorage.getItem('token'));

    return headers;
  }

  doRefresh(refresher){
    this.load(refresher);
  }

  load(refresher) {
    this.http.get('https://suoqix3gpa.execute-api.eu-west-3.amazonaws.com/dev/users', 
          {headers:this.getHeaders()}).subscribe(res => {
            console.log(res.json());
            this.users = res.json().users;
            if(refresher){
              refresher.complete();
            } 
          }, (err) => {
            console.log(err);
            alert("error calling http " + err);
            if(refresher){
              refresher.complete();
            } 
          });
  }

}
