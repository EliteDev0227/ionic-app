import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FeedscatdetailsPage } from '../feedscatdetails/feedscatdetails';
import { SidemenuPage } from '../sidemenu/sidemenu';

@IonicPage()
@Component({
  selector: 'page-feedscategory',
  templateUrl: 'feedscategory.html',
})
export class FeedscategoryPage {

  loading: any;
  resData: any = [];
  loadingAnimation: any = "./assets/imgs/loading.gif";
  tempImage: any = "./assets/imgs/logo.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedscategoryPage');

    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: 'bubbles',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getFeedsData();
  }

  getFeedsData(){
    this.authService.getFeedsInfo().then((data: any)=>{
      if(data) {
        console.log("Result_data", data);
        this.resData = data;
        if(this.loading !== null){
          this.loading.dismiss();
        }
      } else {
        if(this.loading !== null){
          this.loading.dismiss();
        }
        this.alertCtrl.create({
          subTitle: 'Error',
          message: "There is no Data",
          buttons: ["Ok"]
        }).present();
      }
    }).catch(err =>{
      console.log("Result_err_feeds", err.message);
      if(this.loading !== null){
        this.loading.dismiss();
      }
    })
  }
  viewFeedsCateData(id, feeds_data){
    console.log("Selected_feeds_data", id, feeds_data);
    this.navCtrl.push(FeedscatdetailsPage, {feedsCate: feeds_data, cateId: id});
  }
  viewHome(){
    this.navCtrl.setRoot(SidemenuPage);
  }
}
