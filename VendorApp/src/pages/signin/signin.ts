import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController } from 'ionic-angular';
import { SidemenuPage } from '../sidemenu/sidemenu';
import { ForgotpwdPage } from '../forgotpwd/forgotpwd';
import { SignupPage } from '../signup/signup';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  userInfo: any = {};
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public mdlCtrl: ModalController,
    public authService: AuthServiceProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');

    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: 'circles',
    });
  }

  signinUser() {
    this.userInfo.email = 'UNUSED';
    if (this.userInfo.pwd == undefined) {
      this.alertCtrl.create({
        subTitle: 'Error!',
        message: "Please enter Vendor ID",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();
    } else {
      this.loading.present();
      // this.checkUserInfo("john@doe.com", this.userInfo.pwd);
      this.checkUserInfo(this.userInfo.email, this.userInfo.pwd);
    }
  }

  checkUserInfo(userEmail, userId) {
    this.authService.getLoginInfo(userEmail, userId).then((data: any) => {
      console.log("Result_data", data);
      if (this.loading !== null) {
        this.loading.dismiss();
      }
      localStorage.setItem("currentUser", JSON.stringify(data));
      this.navCtrl.setRoot(SidemenuPage);
    }).catch(err => {
      console.log("Result_err", err.message);
      if (this.loading !== null) {
        this.loading.dismiss();
      }
      this.alertCtrl.create({
        subTitle: 'Invalid Login Details',
        message: "Please check Vendor. Contact 757-426-6212 for help",
        buttons: ["Ok"]
      }).present();
    });
  }
  gotoResetPage() {
    let forgot_mdl = this.mdlCtrl.create(ForgotpwdPage);
    forgot_mdl.present();
  }

  registerUser() {
    // let signup_modal = this.mdlCtrl.create(SignupPage);
    // signup_modal.present();
    this.navCtrl.push(SignupPage);
  }
}
