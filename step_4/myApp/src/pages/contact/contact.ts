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
    this.load();
  }

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('token', sessionStorage.getItem('token'));

    return headers;
  }

  load() {
    this.http.get('http://cesi.cleverapps.io/users', 
          {headers:this.getHeaders()}).subscribe(res => {
            console.log(res.json());
            this.users = res.json(); 
          }, (err) => {
            console.log(err);
            alert("error calling http " + err);
          });
  }

}
