import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workorderinvoice',
  templateUrl: 'workorderinvoice.html',
})
export class WorkorderinvoicePage {

  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkorderinvoicePage');
    this.getInvoiceData();
  }
  getInvoiceData() {
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

  addInvoice() {
    this.navCtrl.pop();
  }
  close() {
    this.navCtrl.pop();
  }
}
