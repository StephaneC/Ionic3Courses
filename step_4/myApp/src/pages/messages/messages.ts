import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {

  public message : string;
  public messages : any = [];

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {
    this.load(null);
  }

  getHeaders() : Headers {
    var headers = new Headers();
    console.log('adding to header token = '+this.navParams.get('token'));
    headers.append('token', sessionStorage.getItem('token'));

    return headers;
  }

  doRefresh(refresher) {
    this.load(refresher);
  }

  load(refresher) {
    this.http.get('http://cesi.cleverapps.io/messages', 
          {headers:this.getHeaders()}).subscribe(res => {
            console.log(res.json());
            this.messages = res.json(); 
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

  postMessage() {
    let header : Headers = this.getHeaders();
    let param :string = 'message='+this.message; 

    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://cesi.cleverapps.io/messages', param, 
      {headers : header}).subscribe(res => {
        this.load(null);
      }, (err) => {
        console.log(err);
        alert("error calling http " + err);
      });
  }

 

}
