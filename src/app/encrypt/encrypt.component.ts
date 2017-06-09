import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {

  form;
  string: string = 'String'; // 结果初始化数据

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
    this.string = form.string;
  };

  clipCallback = function (bool) {
    console.log(bool);
  };
}
