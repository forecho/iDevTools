import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  form;
  type: string[] = ['upper', 'number', 'lower'];
  string: string = RandomComponent.randomString(10, this.type); // 结果初始化数据

  constructor() {
  }

  checkboxData = [
    {label: 'RANDOM_TYPES.UPPERCASE_LETTERS', value: 'upper', 'checked': true},
    {label: 'RANDOM_TYPES.LOWER_CASE_LETTERS', value: 'lower', 'checked': true},
    {label: 'RANDOM_TYPES.NUMBERS', value: 'number', 'checked': true},
    {label: 'RANDOM_TYPES.SPECIAL_CHARACTERS', value: 'special', 'checked': false},
  ];


  ngOnInit() {
    this.form = new FormGroup({
      length: new FormControl(10, [Validators.required, Validators.max(100), Validators.min(2)]),//表单初始值
      type: new FormControl(true, Validators.required), // 表单初始值
    })
  }

  // 验证 checkbox
  validateTypes() {
    return this.type.length == 0;
  }


  // checkbox 获取值用法
  onChange(option, event) {
    if (event.target.checked) {
      this.type.push(option);
    } else {
      this.type.splice(this.type.indexOf(option), 1);
    }
  }

  onSubmit = function (form) {
    this.length = form.length;
    this.string = RandomComponent.randomString(form.length, this.type);
  };

  /**
   * 生成随机字符串
   * @param length
   * @param type
   * @returns {string}
   */
  static randomString(length, type) {
    let mask = '';
    if (type.includes('lower')) {
      mask += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (type.includes('upper')) {
      mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (type.includes('number')) {
      mask += '0123456789';
    }
    if (type.includes('special')) {
      mask += "~`!@#$%^&*()_+-={}[]:\"\\;'<>?,./|";
    }
    let result = '';
    for (let i = length; i > 0; --i) {
      result += mask[Math.floor(Math.random() * mask.length)];
    }
    return result;
  }
}
