import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  loading: any;
  resData: any = [];
  leaseData: any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public apiDataProvider: ApiOperatorProvider,
    public alertCtrl: AlertController
  ) {
    if(localStorage.getItem('leaseData') !== null){
      this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
    } else {
      this.leaseData = "";
    }
    this.resData = this.leaseData.trips
    console.log("LeaseData", this.resData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getReservation();

  }
  getReservation(){
    this.loading.dismiss();

  }
}
