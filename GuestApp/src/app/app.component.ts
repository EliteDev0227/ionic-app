import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { SidemenuPage } from "../pages/sidemenu/sidemenu";
import firebase, { Unsubscribe } from "firebase/app";
import 'firebase/auth';
import { Storage } from '@ionic/storage';
import { AuthserviceProvider } from '../providers/authservice/authservice';
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
  testData: any;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public storage: Storage,
    public authService: AuthserviceProvider,
    public toastCtrl: ToastController,
    public pushNotificationService: PushnotificationProvider,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.pushNotificationService.init();

      const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
        console.log('auth changed : ', user);
        if (!user) {
        unsubscribe();
        } else {
          firebase.database().ref('users/' + user.uid).update({
            device_token: localStorage.getItem('token')
          });
          localStorage.setItem('user_id', user.uid);
//          this.nav.setRoot(SidemenuPage);
          unsubscribe;
        }
        });
        this.nav.setRoot(SidemenuPage);
      
    })
  }

}

