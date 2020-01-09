import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WorkorderdetailsPage } from '../workorderdetails/workorderdetails';
import { PushnotificationProvider } from '../../providers/pushnotification/pushnotification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  workorders: any = [];
  workprogress: any = [];
  currentUser: any = {};
  loading: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController,
    public platform: Platform,
    public pushNotiService: PushnotificationProvider
  ) {
    if (localStorage.getItem('currentUser') !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    console.log("current  user data", this.currentUser, typeof (this.currentUser));

    if (this.platform.is('cordova')) {
      this.pushNotiService.init();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getCurrentUserWork();
  }
  getCurrentUserWork() {
    this.loading = this.loadingCtrl.create({
      content: 'Finding your work...',
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.workprogress = [];
    this.authService.getworkingHistory(this.currentUser.vendor_id, 'NOW').then((data: any) => {
      console.log("current user working history", data);
      this.workorders = data;
      var length = 5;
      if (length > this.workorders.length)
        length = this.workorders.length;

      for (let i = 0; i < length; i++) {
        this.workprogress.push(this.workorders[i]);
      }
      if (this.loading !== null) {
        setTimeout(() => {
          this.loading.dismiss();
        }, 1000);
      }
    }).catch(err => {
      if (this.loading !== null) {
        setTimeout(() => {
          this.loading.dismiss();
        }, 1000);
      }
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["Ok"]
      }).present();
    })

  }
  viewAll() {

  }
  viewData(id) {
    this.navCtrl.push(WorkorderdetailsPage, { orderData: this.workorders[id] });
  }
}
