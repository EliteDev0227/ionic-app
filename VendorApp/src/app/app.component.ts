import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';


@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  rootPage: any;
  nav: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public pushNotiService: PushnotificationProvider,
    public splashScreen: SplashScreen) {

    this.initializeApp();

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if(this.platform.is('cordova')){
        this.pushNotiService.init();
      }
      if (localStorage.getItem('currentUser') !== null) {
        this.nav.setRoot(SidemenuPage);
      } else {
        this.nav.setRoot(MainPage);
      }
    });
  }
}

