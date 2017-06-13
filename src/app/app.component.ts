import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LocalSettingsService} from "./local-settings.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalSettingsService]
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    let userLang: string = LocalSettingsService.getLanguage();
    translate.addLangs(["en", "zh-CN"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserCultureLang();
    this.translate.use(userLang ? userLang : browserLang.match(/en|zh-CN/) ? browserLang : 'en');
  }

  changeLang(lang) {
    LocalSettingsService.setLanguage(lang);
    this.translate.use(lang);
  }
}
