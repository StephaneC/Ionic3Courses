import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';

import { MessagesPage } from '../messages/messages';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagesPage;
  tab2Root = ContactPage;

  constructor(public navParams: NavParams) {
    sessionStorage.setItem("token", this.navParams.get('jwt'));

  }
}
