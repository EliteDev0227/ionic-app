import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forgotpwd',
  templateUrl: 'forgotpwd.html',
})
export class ForgotpwdPage {
  useremail: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpwdPage');
  }

  resetPassword() {

    if(this.useremail == undefined) {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();

    }else {
      this.loading = this.loadingCtrl.create({
        content: 'Loading...',
        spinner: 'bubbles',
        cssClass: 'my-loading-class'
      });
      this.loading.present();
      this.viewCtrl.dismiss();
      this.loading.dismiss();
      this.displayToastMesagem("Forget Password!!!");
    }
  }
  displayToastMesagem(message_data) {
    this.toastCtrl.create({
      message: message_data,
      duration: 3000,
      position: "top"
    }).present();
  }

  closeForgotModal(){
    this.viewCtrl.dismiss();
  }
}
