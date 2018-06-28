import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  userName = "";
 // checkEmpty = (this.userName.length == 0)? true:false;
 //**********We don't need it since we can check the empty string in html*********
  constructor() { }

  ngOnInit() {
  }
  // updateUserName(){
  //   //this.userName = (<HTMLInputElement>event.target).value;;
  //   this.userName = " user created! user name is " + this.userName;
  //   this.checkEmpty = (this.userName.length == 0)? true:false;
  // }
  //*************If we use two way databinding, we don't need extra func************

  onClickButton(){
    this.userName = "";
  }
}
