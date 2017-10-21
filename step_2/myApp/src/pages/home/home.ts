import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { MessagesPage } from '../messages/messages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name;

  public displayName;
  public pong;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  click() {
    this.http.get('http://cesi.cleverapps.io/hello?name='+this.name).subscribe(res => {
      console.log(res.text());
      this.displayName = res.text(); 
    }, (err) => {
      console.log(err);
      alert("error calling http " + err);
    });
  }

  clickPing() {
    this.http.post('http://cesi.cleverapps.io/ping', {}).subscribe(res => {
      console.log(res.text());
      this.pong = res.text(); 
    }, (err) => {
      console.log(err);
      alert("error calling http " + err);
    });
  }

  clickPages(){
    this.navCtrl.push(MessagesPage, {      
    });
  }

}
