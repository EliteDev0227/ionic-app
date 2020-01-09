import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

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
    public authService: AuthserviceProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpwdPage');
  }

  resetPassword() {
  this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.authService.getforgetPasswordData(this.useremail).subscribe(snapshot=>{
      console.log("result_forget_password_data", snapshot);
      if(snapshot !== null){
        this.resetEmail();
      }else {
        this.displayToastMesagem("There is no saved data!");
      }
      this.loading.dismiss();
    }, err =>{
      this.displayToastMesagem(err.message);
      this.loading.dismiss();
    })

  }

  resetEmail() {
    this.authService.forgotPassword(this.useremail).then(resData =>{
      console.log("resData", resData);
      alert("Please check your email!");
      this.viewCtrl.dismiss();
    }).catch(err =>{
      console.log("err", err.message);
    });

  }

  displayToastMesagem(message_data){
    this.toastCtrl.create({
      message: message_data,
      duration: 3000,
      position: "top"
    }).present();
  }
  closeForgotModal() {
    this.viewCtrl.dismiss();
  }
}
