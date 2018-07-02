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
    this.load();
  }

  getHeaders() : Headers {
    var headers = new Headers();
    console.log('adding to header token = '+this.navParams.get('token'));
    headers.append('token', this.navParams.get('token'));

    return headers;
  }

  load() {
    this.http.get('http://cesi.cleverapps.io/messages', 
          {headers:this.getHeaders()}).subscribe(res => {
            if(res.status === 200){
              console.log(res.json());
              this.messages = res.json();   
            } else {
              console.log("Error getting messages");
            }
          }, (err) => {
            console.log(err);
            alert("error calling http " + err);
          });
  }

  postMessage() {
    let header : Headers = this.getHeaders();
    let param :string = 'message='+this.message; 

    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://cesi.cleverapps.io/messages', param, 
      {headers : header}).subscribe(res => {
        this.load();
      }, (err) => {
        console.log(err);
        alert("error calling http " + err);
      });
  }

 

}
