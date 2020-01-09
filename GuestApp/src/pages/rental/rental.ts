import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {RentsubPage} from "../rentsub/rentsub";
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';

@IonicPage()
@Component({
  selector: 'page-rental',
  templateUrl: 'rental.html',
})
export class RentalPage {
  loading: any;
  resData: any = [];
  loadingAnimation: any = "./assets/imgs/loading.gif";
  tempImage: any = "./assets/imgs/resturant/food.png";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public apiDataProvider: ApiOperatorProvider,
    public alertCtrl: AlertController,

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentalPage');
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getRentDate();
  }
  getRentDate(){
    this.apiDataProvider.getBrowseRentalData().then((data: any) => {
      if (data) {
        console.log("result_data", data);
        this.resData = data;
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
  viewRentData(id, feed_data){
    console.log("selected_data", id, feed_data);
    this.navCtrl.push(RentsubPage, {rentpassData: feed_data, rentpassId: id});
  }
}
