import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { register } from 'swiper/element/bundle';

register() 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.translateService.setDefaultLang('en'); // Set default language
    this.translateService.use('en'); // Use English as the initial language
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
