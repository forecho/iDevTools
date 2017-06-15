import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  form;
  string: string = this.formatterJson('{"key":"value", "key2":"value2"}'); // 结果初始化数据

  constructor() {

  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('{"key":"value", "key2":"value2"}'), //表单初始值
    })
  }

  validateJson(form) {
    try {
      JSON.stringify(JSON.parse(form.value.string), undefined, 2);
      return true;
    } catch (e) {
      return false;
    }
  }


  onSubmit(form) {
    this.string = this.formatterJson(form.string);
  }

  formatterJson(str) {
    return JSON.stringify(JSON.parse(str), undefined, 2)
  }
}
