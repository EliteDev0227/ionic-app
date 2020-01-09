import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { RestaurantsPage } from "../restaurants/restaurants";
@IonicPage()
@Component({
  selector: 'page-rescat',
  templateUrl: 'rescat.html',
})
export class RescatPage {
  loading: any;
  resData: any = [];
  objectKeys = Object.keys;
  colors: any = ['rgba(200, 66, 244, 0.6)', 'rgba(27, 181, 83, 0.6)', 'rgba(239, 235, 9, 0.6)', 'rgba(196, 21, 1, 0.6)', 'rgba(0, 173, 196, 0.6)', 'rgba(119, 2, 106, 0.6)'];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiDataProvider: ApiOperatorProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RescatPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
    });
    this.loading.present();
    this.getResData();
  }
  getResData() {
    this.apiDataProvider.getResCatData().then((data: any) => {
      if (data) {
        this.resData = data;
        console.log("temp_data", this.resData);
        this.loading.dismiss();
      } else {
        this.alertCtrl.create({
          title: "Error",
          message: "There is no Data",
          buttons: ["OK"]
        }).present();
        this.loading.dismiss();
      }
    }).catch(err => {
      console.log("Reult_err", err.message);
      this.loading.dismiss();
    });
  }
  getBackground(id) {
    var resIdx = id % (this.colors.length);
    return this.colors[resIdx];
  }
  viewCatData(id) {
    console.log("cateData", this.resData[id]);
    this.navCtrl.push(RestaurantsPage, { wholeAttractionData: this.resData, currentAttractionData: this.resData[id], currentId: id});
  }

}
