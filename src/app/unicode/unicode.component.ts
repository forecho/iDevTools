import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-unicode',
  templateUrl: './unicode.component.html',
  styleUrls: ['./unicode.component.css']
})
export class UnicodeComponent implements OnInit {

  form;
  string: string = UnicodeComponent.charToUnicode('Welcome to iDevTools.org'); // 结果初始化数据

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      string: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('Welcome to iDevTools.org'), //表单初始值
    })
  }

  onSubmit(form, type) {
    switch (type) {
      case 'encode':
        this.string = UnicodeComponent.charToUnicode(form.value.string);
        break;

      case 'decode':
        this.string = UnicodeComponent.unicodeToChar(form.value.string);
        break;
    }
  }

  /**
   * 字符串 Unicode
   * @param str
   * @returns {string}
   */
  static charToUnicode(str) {
    return str.split('').map(function (character) {
      return '\\u' + ('0000' + character.charCodeAt().toString(16)).slice(-4);
    }).join('');
  }

  /**
   * Unicode 解码
   * @param str
   * @returns {string|void|any}
   */
  static unicodeToChar(str) {
    return str.replace(/\\u[\dA-F]{4}/gi,
      function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
      });
  }
}
