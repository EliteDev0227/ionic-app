import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FeedsentriesPage } from '../feedsentries/feedsentries';

@IonicPage()
@Component({
  selector: 'page-feedscatdetails',
  templateUrl: 'feedscatdetails.html',
})
export class FeedscatdetailsPage {

  resImage: any = './assets/imgs/feeds/news.jpg';
  loading: any;
  resDataId: any;
  resData: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.resData = this.navParams.get('feedsCate');
    this.resDataId = this.navParams.get('cateId');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedscatdetailsPage');
    console.log("resdata", this.resData, this.resDataId);
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: 'bubbles',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 800);
  }
  viewDetails(id){
    console.log("Selected_id", this.resData[id]);
    this.navCtrl.push(FeedsentriesPage, {entryData: this.resData[id]});
  }
}
