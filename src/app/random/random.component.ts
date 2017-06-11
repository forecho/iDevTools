import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  form;
  type: string[] = ['upper', 'number', 'lower'];
  string: string = RandomComponent.randomString(10, this.type); // 结果初始化数据
  length: number;

  checkboxData = [
    {label: '大写字母 [A-Z]', value: 'upper'},
    {label: '小写字母 [a-z]', value: 'lower'},
    {label: '数字 [0-9]', value: 'number'},
    {label: '特殊字符 [~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\]', value: 'special'},
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      length: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      length: new FormControl(10), //表单初始值
      type: new FormControl(false), // 表单初始值
    })
  }

  // 默认值
  isAvailable = function (value) {
    return this.type.includes(value);
  };

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
    if (type.includes('lower')) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (type.includes('upper')) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (type.includes('number')) mask += '0123456789';
    if (type.includes('special')) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    let result = '';
    for (let i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }
}
