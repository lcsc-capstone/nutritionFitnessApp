import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './login/login.page'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class AppComponent {
  
  public rootPage: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = LoginPage;
    });
  }
}