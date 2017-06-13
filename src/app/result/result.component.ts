import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result: string; // @Input 用于接收父级组建属性

  button: string = 'COPY';

  constructor() {
  }


  ngOnInit() {
  }


  clipCallback = function (bool) {
    this.button = 'COPIED';
    console.log(bool);
  };
}
