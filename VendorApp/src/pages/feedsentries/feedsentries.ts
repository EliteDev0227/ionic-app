import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@IonicPage()
@Component({
  selector: 'page-feedsentries',
  templateUrl: 'feedsentries.html',
})
export class FeedsentriesPage {

  resData: any = {};
  loading: any;
  feedsData: any = [];
  postData: any = [];
  browser: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public iab: InAppBrowser,
    public platform: Platform,
    public toastCtrl: ToastController
  ) {
    this.resData = navParams.get('entryData');
    console.log("get_entriesData", this.resData);

    if (localStorage.getItem('postData') !== null) {
      this.postData = JSON.parse(localStorage.getItem('postData'));
    } else {
      this.postData = [];
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsentriesPage');
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: 'bubbles',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getFeedsNews();
  }

  getFeedsNews() {
    console.log("url", this.resData.url);
    this.authService.getFeedsDetailsInfo(this.resData.url).then((data: any) => {
      if (data) {
        if (this.loading !== null) {
          this.loading.dismiss();
        }
        this.feedsData = data.rss.channel[0].item;
        console.log("feeds_data", this.feedsData[0].date, this.feedsData);
      } else {
        if (this.loading !== null) {
          this.loading.dismiss();
        }
        this.alertCtrl.create({
          subTitle: "Error",
          message: "There is no Data",
          buttons: ["Ok"]
        }).present();
      }
    }).catch(err => {
      console.log("Result_news_data", err.message);
      if (this.loading !== null) {
        this.loading.dismiss();
      }
    })
  }
  doInfinite(inifiniteScroll) {
    console.log("Begin async operation");
    setTimeout(() => {
      inifiniteScroll.complete();
    }, 500);
  }
  viewPostData(id) {
    let url = this.feedsData[id].link;
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
  bookmarkPost(id) {

    let toast = this.toastCtrl.create({
      message: "Post Saved ...",
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log("dismissed Toast");
    });
    toast.present();
    console.log("Posted_save_Data", this.feedsData[id]);
    if (this.postData.length == 0) {
      this.postData.push(this.feedsData[id]);
    } else {
      for (let i = 0; i < this.postData.length; i++) {
        if (this.postData[i].title !== this.feedsData[id].title) {
          this.postData.push(this.feedsData[id]);
        }
      }
    }
    console.log("Save_array", this.postData);
    localStorage.setItem("postData", JSON.stringify(this.postData));
  }
}
