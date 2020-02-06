import { Injectable } from '@angular/core';
import { Message } from './message';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";


@Injectable()
export class MessagesService {

    private messages:BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);


  constructor(public http: Http, private storage: Storage) {
      // on initialise avec le storage
    this.storage.get('messages').then(
        data=>{
            this.messages.next(data);
        }); 
   }

  private getHeaders() : Headers {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' +  localStorage.getItem('token'));//FIXME

    return headers;
  }

  update(){
    // ask to get new content
    this.http.get('https://suoqix3gpa.execute-api.eu-west-3.amazonaws.com/dev/messages', 
    {headers:this.getHeaders()}).subscribe(res => {
        if(res.status === 200){
            var messages = res.json().messages;
            this.storage.set('messages', messages); 
            this.messages.next(messages);
        }        
    }, (err) => {
        console.log(err);
    });
  }

  getMessages(): Observable<Message[]>{
    return this.messages;   
  }

  postMessage(message: string){
    let header : Headers = this.getHeaders();
    let param :string = 'message='+message; 

    header.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('https://suoqix3gpa.execute-api.eu-west-3.amazonaws.com/dev/messages', param, 
      {headers : header}).subscribe(res => {
        this.update();
      }, (err) => {
        console.log("error calling http " + err);
      });
  }

}