import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, Platform } from 'ionic-angular';
import { PaymentPage } from "../payment/payment";
import { RentalPage } from "../rental/rental";
import { GettingmapPage } from "../gettingmap/gettingmap";

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
@IonicPage()
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class TripsPage {
  tripsData: any = {};
  tripId: any;
  loading: any;
  browser: any;
  map_address: any = "601 Sandbridge Road Virginia Beach, VA 23456";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public apiDataProvider: ApiOperatorProvider,
    public platform: Platform,
    public iab: InAppBrowser
  ) {
    this.tripsData = navParams.get('tripsData');
    this.tripId = navParams.get('tripsId');
    console.log("trip_data", this.tripsData, this.tripId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
    this.loading = this.loadingCtrl.create({
      content: "Loading...",
      spinner: 'bubbles',
    });
    this.loading.present();
    this.getTripData();
  }
  getTripData() {
    this.loading.dismiss();
  }
  viewPaymentData() {
    this.navCtrl.push(PaymentPage);
  }
  viewLeaseData() {
    this.apiDataProvider.getLeaseData().then((data: any) => {
      console.log("res_data", data);
      if (data) {
        let url = data + '180953';
        if (this.platform.is('android')) {
          let options = "hardwareback=no";
          this.browser = this.iab.create(url, "_blank", options);
        } else {
          this.browser = this.iab.create(url, "_blank");
        }
        this.browser.on('exit').subscribe(event => {
          console.log("event", event);
          this.browser.close();
          console.log("Appbrowser closed");
        }, error => {
          console.log("error", error);
          this.browser.close();
        });
      } else {
        this.alertCtrl.create({
          title: "Check the Api",
          message: "This will show the via APi",
          buttons: ["OK"]
        }).present();
      }
    }).catch(err => {
      console.log("Reult_err", err.message);
    });
  }
  viewRentalData() {
    this.navCtrl.push(RentalPage);
  }
  viewMapData() {
    this.navCtrl.push(GettingmapPage, { mapData: this.map_address });
  }


}
