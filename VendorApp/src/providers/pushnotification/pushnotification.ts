import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Injectable()
export class PushnotificationProvider {

  constructor(
    public http: HttpClient,
    public oneSignal: OneSignal,
    public platform: Platform,
    public vibration: Vibration
    ) {
    console.log('Hello PushnotificationProvider Provider');
  }
  init() {
    if (this.platform.is('core')) {
      return;
    }

    this.oneSignal.startInit('cddd2dd1-4340-4549-b014-58febf93110d', '41677609884');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
      if(localStorage.getItem('vibration') == 'true'){
        this.vibration.vibrate(1000);
      }
    });
    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log("Noti", noti);
    });
    this.oneSignal.endInit();

    if (localStorage.getItem('push') == 'true') {
      this.getPushData();
    } else {
      this.disablePush();
    }
  }
  disablePush(){
    this.oneSignal.setSubscription(false);
    // alert("Disable Push");
  }
  getPushData() {
    this.oneSignal.setSubscription(true);

    // alert("enalbe Push");
  }
}
