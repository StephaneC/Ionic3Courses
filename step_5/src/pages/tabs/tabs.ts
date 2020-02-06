import { Component } from '@angular/core';
import { NavParams, NavController} from 'ionic-angular';

import { MessagesPage } from '../messages/messages';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagesPage;
  tab2Root = ContactPage;

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    if(this.navParams.get('jwt')){
      localStorage.setItem("token", this.navParams.get('jwt'));
    } else {
      // si pas de token on quitte
      if(!localStorage.getItem("token")){
        this.navCtrl.push(HomePage);
      }
    }
  }
}
