import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileImg: any = "https://www.siebert-realty.com/img/homepage-sandbridgebeach.jpg";
  userImg: any = "assets/imgs/menu/empty_avatar.png";
  loading: any;
  currentUser: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {

    if (localStorage.getItem('currentUser') !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

}
