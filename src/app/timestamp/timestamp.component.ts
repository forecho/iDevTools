import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {

  form;
  string: any = TimestampComponent.formatTime(TimestampComponent.currentTimestamp()); // 结果初始化数据

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl(TimestampComponent.currentTimestamp()), //表单初始值
    })
  }


  onSubmit = function (form) {
    this.string = TimestampComponent.formatTime(form.string);
  };

  /**
   *
   * @param value
   * @returns {any}
   */
  static formatTime(value) {
    if (Number(value)) {
      let date = new Date(value * 1000);// 如果date为10位不需要乘1000
      let Y = date.getFullYear() + '-';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
      let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
      return Y + M + D + h + m + s;
    }
    return Math.floor(new Date(value).getTime() / 1000)
  }

  /**
   * 当前时间转换操作
   * @param form
   */
  currentTime = function (form) {
    this.form.controls['string'].setValue(TimestampComponent.currentTimestamp());
    this.string = TimestampComponent.formatTime(form.value.string);
  };

  /**
   * 获取当前时间戳
   * @returns {number}
   */
  static currentTimestamp() {
    return Math.floor(new Date().getTime() / 1000)
  }
}
