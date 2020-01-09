import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RentdetailsPage } from "../rentdetails/rentdetails";
@IonicPage()
@Component({
  selector: 'page-rentsub',
  templateUrl: 'rentsub.html',
})
export class RentsubPage {
  resMenu: any;
  resImage: any = './assets/imgs/rent/rent3.jpg';
  loading: any;
  resDataId: any;
  resData: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.resData = navParams.get('rentpassData');
    this.resDataId = navParams.get('rentpassId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentsubPage');
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getSubRentData();
  }
  getSubRentData() {
    this.loading.dismiss();
  }
  rentDetails(id) {
    console.log("rent_details_data", id);
    this.navCtrl.push(RentdetailsPage, {rentdetailId: id});
  }

}
