import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Http} from '@angular/http';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  form;
  string: string = decodeURIComponent('http%3A%2F%2Fidevtools.org%2Furl-encode'); // 结果初始化数据

  constructor(private fb: FormBuilder, private http: Http) {
    this.form = this.fb.group({
      string: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      string: new FormControl('select * from foo where val1 = val2;'), //表单初始值
    })
  }

  onSubmit = function (form) {
    this.string = this.formatterSql(form.string);
  }

  formatterSql(sql) {
    let url = 'https://sqlformat.org/api/v1/format';
    let body = new FormData();
    body.append('sql', sql);
    body.append('reindent', '1');
    return this.http.post(url, body).subscribe(result => console.log(result));
  }
}
