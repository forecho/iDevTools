import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {EncryptComponent} from './encrypt/encrypt.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClipModule} from "ng2-clip";
import { UrlEncodeComponent } from './url-encode/url-encode.component';
import { RandomComponent } from './random/random.component';
import { ResultComponent } from './result/result.component';
import { TimestampComponent } from './timestamp/timestamp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncryptComponent,
    UrlEncodeComponent,
    RandomComponent,
    ResultComponent,
    TimestampComponent,
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
