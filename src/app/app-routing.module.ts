import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EncryptComponent} from "app/encrypt/encrypt.component";
import {UrlEncodeComponent} from "./url-encode/url-encode.component";
import {RandomComponent} from "./random/random.component";
import {TimestampComponent} from "./timestamp/timestamp.component";

const routes: Routes = [
  {path: '', children: []},
  {path: 'home', component: HomeComponent},
  {path: 'timestamp', component: TimestampComponent},
  {path: 'encrypt', component: EncryptComponent},
  {path: 'url-encode', component: UrlEncodeComponent},
  {path: 'random', component: RandomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
