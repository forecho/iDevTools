import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EncryptComponent} from "./encrypt/encrypt.component";
import {UrlEncodeComponent} from "./url-encode/url-encode.component";
import {RandomComponent} from "./random/random.component";
import {TimestampComponent} from "./timestamp/timestamp.component";
import {UnicodeComponent} from "./unicode/unicode.component";
import {SqlComponent as FormatterSqlComponent} from "./formatter/sql/sql.component";
import {JsonComponent as FormatterJsonComponent} from "./formatter/json/json.component";

const routes: Routes = [
  {path: '', redirectTo: 'random', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'timestamp', component: TimestampComponent},
  {path: 'encrypt', component: EncryptComponent},
  {path: 'url-encode', component: UrlEncodeComponent},
  {path: 'random', component: RandomComponent},
  {path: 'unicode', component: UnicodeComponent},
  {path: 'sql-formatter', component: FormatterSqlComponent},
  {path: 'json-formatter', component: FormatterJsonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
