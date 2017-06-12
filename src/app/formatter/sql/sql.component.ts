import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  form;
  string: string = ''; // 结果初始化数据

  constructor(private fb: FormBuilder, private http: Http) {
    this.form = this.fb.group({
      string: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl(''), //表单初始值
    })
  }

  onSubmit(form) {
    this.formatterSql(form.string).subscribe(
      result => this.string = result.result,
      err => {
        console.log(err);
      });
  }

  formatterSql(sql) {
    let url = 'https://sqlformat.org/api/v1/format';
    let body = new FormData();
    body.append('sql', sql);
    body.append('reindent', '1');
    return this.http.post(url, body)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
