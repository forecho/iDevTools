import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-url-encode',
  templateUrl: './url-encode.component.html',
  styleUrls: ['./url-encode.component.css']
})
export class UrlEncodeComponent implements OnInit {
  form;
  string: string = decodeURIComponent('http%3A%2F%2Fidevtools.org%2Furl-encode'); // 结果初始化数据

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('http%3A%2F%2Fidevtools.org%2Furl-encode'), //表单初始值
    })
  }

  onSubmit = function (form, type) {
    switch (type) {
      case 'encode':
        this.string = encodeURIComponent(form.value.string);
        break;

      case 'decode':
        this.string = decodeURIComponent(form.value.string);
        break;
    }
  }
}
