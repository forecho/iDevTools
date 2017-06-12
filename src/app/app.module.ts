import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {EncryptComponent} from './encrypt/encrypt.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';
import {ClipModule} from "ng2-clip";
import {UrlEncodeComponent} from './url-encode/url-encode.component';
import {RandomComponent} from './random/random.component';
import {ResultComponent} from './result/result.component';
import {TimestampComponent} from './timestamp/timestamp.component';
import {UnicodeComponent} from './unicode/unicode.component';
import {JsonComponent} from './formatter/json/json.component';
import {SqlComponent} from './formatter/sql/sql.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncryptComponent,
    UrlEncodeComponent,
    RandomComponent,
    ResultComponent,
    TimestampComponent,
    UnicodeComponent,
    JsonComponent,
    SqlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClipModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
