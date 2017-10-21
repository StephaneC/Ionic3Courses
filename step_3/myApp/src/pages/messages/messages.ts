import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  public message : string;
  public messages : any;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    this.load();
  }

  getHeaders() : Headers {
    var headers = new Headers();
    headers.append('token', this.navParams.get('token'));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  load() {
    this.http.post('http://cesi.cleverapps.io/messages', {}, 
          {headers:this.getHeaders()}).subscribe(res => {
            console.log(res.json());
            this.messages = res.json(); 
          }, (err) => {
            console.log(err);
            alert("error calling http " + err);
          });
  }

  postMessage() {
    this.http.post('http://cesi.cleverapps.io/messages', {}, 
      {headers : this.getHeaders()}).subscribe(res => {
        console.log(res.json());
        this.message = res.json();
      }, (err) => {
        console.log(err);
        alert("error calling http " + err);
      });
  }

 

}
