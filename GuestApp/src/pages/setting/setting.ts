import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PushnotificationProvider } from '../../providers/pushnotification/pushnotification';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  special: any = false;
  deals: any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public storage: Storage,
    public pushNotificationService: PushnotificationProvider
  ) {
    if (localStorage.getItem('special') !== null) {
      this.special = localStorage.getItem('special');
    }
    if (localStorage.getItem('deals') !== null) {
      this.deals = localStorage.getItem('deals');
    }
    console.log("saved_toggle_data", this.special, this.deals);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');

  }
  confirm() {
    localStorage.setItem('special', this.special);
    localStorage.setItem('deals', this.deals);

    this.toastCtrl.create({
      message: "Successfully Changed",
      duration: 3000,
      position: 'top'
    }).present();

    console.log("toggle selection data", this.special, this.deals);
    this.pushNotificationService.init();
    this.navCtrl.pop();

  }

}
