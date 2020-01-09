import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FeedscategoryPage } from '../feedscategory/feedscategory';
import { SigninPage } from '../signin/signin';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: any = {};
  sLoading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  registerUser(){
    if(this.user.email == undefined || this.user.pwd == undefined){
      this.alertCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();
    } else {
      let loading = this.loadingCtrl.create({
        content: 'Creating Account',
        spinner: 'bubbles'
      });
      loading.present();
      setTimeout(()=>{
        // this.viewCtrl.dismiss();
        this.navCtrl.setRoot(FeedscategoryPage);
        loading.dismiss();
      }, 2000)
    }
  }
  displayToast(message) {
    this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
  }
  closeSignupModal(){
    // this.viewCtrl.dismiss();
    // this.navCtrl.pop()
    this.navCtrl.setRoot(SigninPage);
  }
}
