import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-myalert',
  templateUrl: 'myalert.html',
})
export class MyalertPage {

  postsData: any = [];
  loading: any;
  browser: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public iab: InAppBrowser,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) {
    if (localStorage.getItem('postData') !== null) {
      this.postsData = JSON.parse(localStorage.getItem('postData'));
    } else {
      this.postsData = [];
    }
    console.log("post_Data", this.postsData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyalertPage');
    if(this.postsData.length > 0){
      this.loading = this.loadingCtrl.create({
        content: "Loading...",
        spinner: 'hide',
        cssClass: 'my-loading-class'
      });
      this.loading.present();
      setTimeout(()=>{
        this.loading.dismiss();
      }, 1000);
    } else {
      let toast =  this.toastCtrl.create({
        message: 'There is no Bookmark',
        duration: 3000,
        position: 'top'
      });
      toast.onDidDismiss(()=>{
        console.log("dismiss");
      });
      toast.present();
    }
  }
  getData(id){
    let url = this.postsData[id].link;
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
