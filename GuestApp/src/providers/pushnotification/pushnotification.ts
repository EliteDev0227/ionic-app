import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';


@Injectable()
export class PushnotificationProvider {

  constructor(
    public http: HttpClient,
    public oneSignal: OneSignal,
    public platform: Platform
  ) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init() {
    if (this.platform.is('core')) {
      return;
    }

    this.oneSignal.startInit('3823efc1-2c83-4c8d-9c11-67479c4143d1', '648371285185');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    this.oneSignal.handleNotificationReceived().subscribe(() => {

    });
    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log("Noti", noti);
    });
    this.oneSignal.endInit();

    if (localStorage.getItem('special') == 'true' || localStorage.getItem('deals') == 'true') {
      this.getPushData();
    } else {
      this.disablePush();
    }
  }
  disablePush() {
    this.oneSignal.setSubscription(false);
    // alert("Disable Push");
  }
  getPushData() {
    this.oneSignal.setSubscription(true);
    // alert("enalbe Push");
  }
}
