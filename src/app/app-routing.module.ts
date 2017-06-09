import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EncryptComponent} from "app/encrypt/encrypt.component";

const routes: Routes = [
  {path: '', children: []},
  {path: 'home', component: HomeComponent},
  {path: 'encrypt', component: EncryptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
