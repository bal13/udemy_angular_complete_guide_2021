import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name-input',
  templateUrl: './user-name-input.component.html',
  styleUrls: ['./user-name-input.component.css']
})
export class UserNameInputComponent implements OnInit {
  username:string = "username default";
  constructor() { }

  ngOnInit(): void {
  }
  onSetUserName(){
    this.username = "";

  }
}
