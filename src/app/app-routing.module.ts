import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EncryptComponent} from "app/encrypt/encrypt.component";
import {UrlEncodeComponent} from "./url-encode/url-encode.component";

const routes: Routes = [
  {path: '', children: []},
  {path: 'home', component: HomeComponent},
  {path: 'encrypt', component: EncryptComponent},
  {path: 'url-encode', component: UrlEncodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
