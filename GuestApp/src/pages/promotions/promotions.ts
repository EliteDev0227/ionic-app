import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html',
})
export class PromotionsPage {
  promotions: any = [];
  loading: any;
  browser: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public iab: InAppBrowser,
    public alertCtrl: AlertController,
    public platform: Platform,
    public loadingCtrl: LoadingController,



  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionsPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getPromotionData();
  }
  getPromotionData() {
    this.promotions = [
      { "url": "http://golfvb.com/golf-courses/red-wing-lake/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-05.jpg" },
      { "url": "http://www.hellspoint.com/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-06.jpg" },
      { "url": "http://virginiabeachadventurepark.com/gift-ideas/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-07.jpg" },
      { "url": "https://www.iflyworld.com/virginia-beach/", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-08.jpg" },
      { "url": "https://www.oceanbreezewaterpark.com/promo-code/", "image": "https://guest.siebert-realty.com/img/OceanBreeze2015-03.jpg" },
      { "url": "http://www.acolorfullifephoto.com/siebert-realty-guests", "image": "https://guest.siebert-realty.com/img/SiebertSummerPromos-04.jpg" }
    ];
    console.log("promotion_data", this.promotions)
    this.loading.dismiss();
  }
  goViewData(url) {
    console.log("MenuId", url);
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

  }

}
