import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {EncryptComponent} from './encrypt/encrypt.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClipModule} from "ng2-clip";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncryptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
