import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LocalSettingsService} from "./local-settings.service";
import {Router, NavigationEnd} from '@angular/router';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalSettingsService]
})
export class AppComponent {

  constructor(private translate: TranslateService, private router: Router) {
    let userLang: string = LocalSettingsService.getLanguage();
    translate.addLangs(["en", "zh-CN"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserCultureLang();
    this.translate.use(userLang ? userLang : browserLang.match(/en|zh-CN/) ? browserLang : 'en');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  changeLang(lang) {
    LocalSettingsService.setLanguage(lang);
    this.translate.use(lang);
  }
}
