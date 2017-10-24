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
    headers.append('token', sessionStorage.getItem('token'));

    return headers;
  }

  doRefresh(refresher){
    this.load(refresher);
  }

  load(refresher) {
    this.http.get('http://cesi.cleverapps.io/users', 
          {headers:this.getHeaders()}).subscribe(res => {
            console.log(res.json());
            this.users = res.json();
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
