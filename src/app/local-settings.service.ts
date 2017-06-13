import {Injectable} from '@angular/core';

@Injectable()
export class LocalSettingsService {

  //todo: better error handling!
  static getLanguage(): string {
    if (localStorage) {
      return localStorage['language'] || "";
    } else {
      return "";
    }
  }

  static setLanguage(language: string) {
    if (localStorage) {
      localStorage['language'] = language;
    }
  }

}
