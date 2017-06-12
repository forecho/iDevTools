import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import * as Hashes from 'jshashes';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css'],
})
export class EncryptComponent implements OnInit {

  form;
  string: string = new Hashes.MD5().hex('iDevTools.org'); // 结果初始化数据

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      string: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('iDevTools.org'), //表单初始值
    })
  }

  onSubmit = function (form, type) {
    switch (type) {
      case 'sha1':
        this.string = new Hashes.SHA1().hex(form.value.string);
        break;

      case 'sha256':
        this.string = new Hashes.SHA256().hex(form.value.string);
        break;

      default:
        this.string = new Hashes.MD5().hex(form.value.string);
        break;
    }
  };
}
