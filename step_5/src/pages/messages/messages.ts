import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { MessagesService } from './messages.services';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers:[MessagesService]
})
export class MessagesPage implements OnInit {

  public message : string;
  public messages : any = [];
  public refresher;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            public messagesServices: MessagesService) {
  }

  ngOnInit() {
    //first wwe subscribe to messages observable
    this.messagesServices.getMessages().subscribe(
      result=>{
        console.log({result});
        this.messages=result;

        if(this.refresher){
          this.refresher.complete();
        }
      },
      error=>console.log("Error getting message"), 
      () => {
        console.log("completed");
      });
    this.load();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.load();
  }

  load() {
    //ask to update data
    this.messagesServices.update();
  }

  postMessage() {
    this.messages = this.messagesServices.postMessage(this.message);
  }
}
