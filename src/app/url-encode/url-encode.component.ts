import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-url-encode',
  templateUrl: './url-encode.component.html',
  styleUrls: ['./url-encode.component.css']
})
export class UrlEncodeComponent implements OnInit {
  form;
  string: string = decodeURIComponent('http%3A%2F%2Fidevtools.org%2Furl-encode'); // 结果初始化数据
  type: string;

  radioData = [
    {label: 'Encode', value: 'encode'},
    {label: 'Decode', value: 'decode'},
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      string: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('http%3A%2F%2Fidevtools.org%2Furl-encode'), //表单初始值
      type: new FormControl('decode'), // 表单初始值
    })
  }

  onSubmit = function (form) {
    switch (form.type) {
      case 'encode':
        this.string = encodeURIComponent(form.string);
        break;

      case 'decode':
        this.string = decodeURIComponent(form.string);
        break;
    }
    this.type = form.type;
  };

  clipCallback = function (bool) {
    console.log(bool);
  };
}
