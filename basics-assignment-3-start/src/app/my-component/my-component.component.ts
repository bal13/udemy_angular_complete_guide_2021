import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles:[`
      .colorStyle
      {
          color: white;
      }
    `]
})
export class MyComponentComponent implements OnInit {
  isHidden: boolean = true;
  myArray = [];
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(){
    this.isHidden = !this.isHidden;
    this.myArray.push(Date());
  }

//   getColor(){
//     return (this.myArray.length > 4 )? 'blue' : 'white'
// }

}
