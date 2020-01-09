import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, AlertController, ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';



@IonicPage()
@Component({
  selector: 'page-blogpost',
  templateUrl: 'blogpost.html',
})
export class BlogpostPage {
  post: any = [];
  loading: any;
  initial_size: number = 14;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public iab: InAppBrowser,
    public platform: Platform,
    public socialSharing: SocialSharing,
    public toastCtrl: ToastController
  ) {
   this.post = navParams.get("blogpostData");
    console.log("post_Data", this.post);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogpostPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.showDetail();
  }
  showDetail() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }

  vationRent(){
  }
  biggerText(){
    this.initial_size += 2;
    var font_size = <HTMLElement>document.getElementsByClassName('post-text')[0];
    font_size.style.fontSize =  this.initial_size + 'px';
  }
  smallerText(){
    this.initial_size -= 2;
    var font_size = <HTMLElement>document.getElementsByClassName('post-text')[0];
    font_size.style.fontSize =  this.initial_size + 'px';
  }
  sharePost(url){
    this.socialSharing.share("Share", "share this blog...", "", url).then(()=>{
      this.toastCtrl.create({
        message: "Sharing Sucessfully",
        duration: 3000,
        position: 'bottom'
      }).present();
    }).catch(()=>{
      this.toastCtrl.create({
        message: "Sharing failed",
        duration: 3000,
        position: 'bottom'
      }).present();
    })
  }

  setBookMark(url) {

     this.toastCtrl.create({
      message: 'Book Successfully..',
      duration: 3000,
      position: 'bottom'
    }).present();
    let temp_data = JSON.stringify(this.post);
    localStorage.setItem('bookMarked', temp_data);

  }
}
