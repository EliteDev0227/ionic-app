import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { BlogpostPage } from "../blogpost/blogpost";
@IonicPage()
@Component({
  selector: 'page-savelater',
  templateUrl: 'savelater.html',
})
export class SavelaterPage {
  bookData: any = [];
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SavelaterPage');
    if (localStorage.getItem('bookMarked') !== null) {
      var tempData = localStorage.getItem('bookMarked');
      this.bookData = JSON.parse(tempData);
    } else {
      this.displayToastData("There is no book Data!");
    }
  }

  showBookMark() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
      if (this.bookData.length !== 0 ) {
        console.log("book_data", this.bookData);
        this.navCtrl.push(BlogpostPage, { blogpostData: this.bookData });
      } else {
        this.displayToastData("there is no book Data !");
      }

    }, 1000);
  }
  displayToastData(message_data) {
    this.toastCtrl.create({
      message:  message_data,
      duration: 3000,
      position: "top"
    }).present();
  }

}
