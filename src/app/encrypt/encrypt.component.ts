import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import * as Hashes from 'jshashes';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {

  form;
  string: string = new Hashes.MD5().hex('String'); // 结果初始化数据

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      string: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('String')
    })
  }

  onSubmit = function (form) {
    this.string = new Hashes.MD5().hex(form.string);
  };

  clipCallback = function (bool) {
    console.log(bool);
  };
}
