import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(translate: TranslateService, authService: AuthService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    authService.checkAuthentication();
  }
}
