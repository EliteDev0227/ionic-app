import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { PushnotificationProvider } from '../../providers/pushnotification/pushnotification';



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  loading: any;
  connects: any = [];
  connect_hskp: any = [];
  connecthkData: any;
  connectData: any;
  vibrationData: any = false;
  push: any = false;
  toast: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public vibration: Vibration,
    public pushNotiService: PushnotificationProvider,
    public toastCtrl: ToastController
  ) {
    if (localStorage.getItem('push') !== null) {
      this.push = localStorage.getItem('push');
    }
    if (localStorage.getItem('vibration') !== null) {
      this.vibrationData = localStorage.getItem('vibration');
    }
    console.log("saved_toggle_data", this.push, this.vibrationData);



    this.connects = [
      { "name": "Trent S", "phone": "757-426-6200" },
      { "name": "Joadi L", "phone": "757-426-6200" },
      { "name": "Kate F", "phone": "757-426-6200" },
      { "name": "Kimberly B", "phone": "757-426-6200" }
    ];

    this.connect_hskp = [
      { "name": "Amberly B", "phone": "757-426-6200" },
      { "name": "Laura ", "phone": "757-426-6200" },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.getSettingData();
  }

  getSettingData() {
    this.loading = this.loadingCtrl.create({
      content: "Loading...",
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  viewConnectHouseKp(id) {

  }

  viewConnect(id) {

  }
  changePush() {
    localStorage.setItem('push', this.push);
  }
  changeVibration() {
    if (this.vibrationData == true) {
      this.vibration.vibrate(1000);
    }
    localStorage.setItem('vibration', this.vibrationData);
  }

  confirm() {
    this.toastCtrl.create({
      message: "Successfully Changed",
      duration: 3000,
      position: 'top'
    }).present();
    // localStorage.setItem('push', this.push);
    localStorage.setItem('vibration', this.vibrationData);
    this.pushNotiService.init();
    this.navCtrl.pop();
  }

  showToast() {
    if (this.toast) {
      return
    }
    this.toast = this.toastCtrl.create({
      message: "Test Toast",
      duration: 3000,
      position: 'top'
    });

    this.toast.onDidDismiss(() => {
      this.toast = null
    })
    this.toast.present();
  }
}
