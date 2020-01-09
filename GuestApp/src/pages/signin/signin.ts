import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from "../signup/signup";
import { ForgotpwdPage } from "../forgotpwd/forgotpwd";
import { SidemenuPage } from "../sidemenu/sidemenu";
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { Sim } from '@ionic-native/sim';
import { CountrycodeProvider } from '../../providers/countrycode/countrycode';
import { Firebase } from '@ionic-native/firebase';
import { PhoneauthPage } from "../phoneauth/phoneauth";
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import {PhoneloginPage} from "../phonelogin/phonelogin";
import {SignupguestPage} from "../signupguest/signupguest";
// import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  userInfo: any = {};
  tabs: any = 'lease';
  phone: any;
  currentDialCode: any = "";
  loading: any;
  verificationId: any;
  leaseData: any = {};
  shareCode: any;
  guest: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mdlCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthserviceProvider,
    public cf: ChangeDetectorRef,
    public sim: Sim,
    public countryService: CountrycodeProvider,
    public firebase: Firebase,
    public apiService: ApiOperatorProvider,
    public platform: Platform
  ) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
    this.getCurrentCode();
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "circles",
    });
  }
  segmentChanged() {
    this.cf.detectChanges();
  }

  signinUser() {
    if (this.userInfo.email == undefined || this.userInfo.pwd == undefined) {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential.",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();
    } else {
      this.loading.present();
      this.authService.login(this.userInfo).then(authData => {
        console.log("auto_login_data", authData);
        this.authService.getcurrentUserData(authData.user.uid).subscribe(resData => {
          if (resData.val().status !== 'success') {
            alert(`Your reservation verifiy failed, Can't Login now, Please sign up again...`);
            this.loading.dismiss();
          } else {
            console.log("user_id", authData.user.uid);
            localStorage.setItem('user_id', authData.user.uid);
            let guestId = resData.val().guest_id;
            console.log("guest_id", guestId);
            this.apiService.getGuestUserIndexData(guestId).then((resData: any)=>{
              console.log("result_lease_data", resData);
              this.leaseData =  resData;
              localStorage.setItem('leaseData', JSON.stringify(resData));
              localStorage.setItem('userType', "lease");
              this.loading.dismiss();
              this.navCtrl.setRoot(SidemenuPage);
            }).catch(err =>{
              console.log("Err", err.message);
              this.loading.dismiss();
            })
            // this.navCtrl.setRoot(SidemenuPage);
          }
        })
      }, err => {
        this.alertCtrl.create({
          message: err.message,
          buttons: ["OK"]
        }).present();
        this.loading.dismiss();
      })
    }
  }
  gotoResetPage() {
    let forgot_mdl = this.mdlCtrl.create(ForgotpwdPage);
    forgot_mdl.present();
  }

  registerUser() {
    let signup_modal = this.mdlCtrl.create(SignupPage);
    signup_modal.present();
  }
  getCountryCode(codeName) {
    this.countryService.getCountryCode(codeName).subscribe(res => {
      this.currentDialCode = res.dial_code;
    })
  }

  getCurrentCode() {
    this.sim.getSimInfo().then(info => {
      console.log("sim info", info);
      var coutryname = info.countryCode.toUpperCase();
      this.getCountryCode(coutryname)
    }, err => {
      console.log("Unble to get sim info", err.message);
    });
    this.sim.hasReadPermission().then(info => {
      console.log("Has permission", info)
    }).catch(err => {
      console.log("sim HasReadPermissionErr", err.message);
      this.sim.requestReadPermission().then(info => {
        console.log("Permission granted issue");
      }, err => {
        console.log("Permission Denied");
      })
    })
  }

  signinUserWithPhone(data) {
    this.apiService.getGuestUserVerify(data.phone, data.shareCode, "phone").subscribe((guestResData: any) => {
      console.log("result  guest verify data", guestResData);
      if (guestResData.status !== 'success') {
        alert(guestResData.status);
        this.loading.dismiss();
      } else {
        this.phoneRegister(guestResData);
      }
    }, err =>{
      alert("Error" + err.message);
      this.loading.dismiss();
    })
  }
  phoneRegister(guestData) {
    console.log("phone_number", this.currentDialCode + this.phone);
    this.firebase.verifyPhoneNumber(this.currentDialCode + this.phone, 60).then((credential) => {
      let phone = this.currentDialCode + this.phone;
      console.log("credential", credential);
      if(this.platform.is('android')){
        this.verificationId = credential.verificationId;
      }else if(this.platform.is('ios')){
        this.verificationId = credential;
      }
      this.loading.dismiss();
      if (credential.instantVerification == true) {
        this.alertCtrl.create({
          title: "InstantVerifcation",
          subTitle: "There is no sms in this case.",
          buttons: ["OK"]
        }).present();
        this.navCtrl.setRoot(SidemenuPage);
      } else {
        this.navCtrl.setRoot(PhoneauthPage, { verificationId: this.verificationId, phoneCode: this.phone, guestInfo: guestData})
      }
    }).catch(error => {
      this.alertCtrl.create({
        message: JSON.stringify(error),
        buttons: ["OK"]
      }).present();
    })
  }

  selectPhone(){
    let signup_modal = this.mdlCtrl.create(PhoneloginPage);
    signup_modal.onDidDismiss(data =>{
      console.log("Modal_data", data);
      this.phone = data.phone;
      this.signinUserWithPhone(data);
    });
    signup_modal.present();
  }

  signUpGuest(){
    console.log("guest_Page");
    let sub_modal = this.mdlCtrl.create(SignupguestPage);
    sub_modal.present();
  }
  signInGuest(){
    if (this.guest.email == undefined || this.guest.pwd == undefined || this.guest.shareCode == undefined) {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential.",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();
    } else {
      this.loading = this.loadingCtrl.create({
        spinner: 'circles'
      });
      this.loading.present();
      this.authService.login(this.guest).then(authData => {
        console.log("auto_login_data", authData);
        this.authService.getcurrentUserData(authData.user.uid).subscribe(resData => {
          if (resData.val().status !== 'success') {
            alert(`Your reservation verifiy failed, Can't Login now, Please sign up again...`);
          } else {
            localStorage.setItem('user_id', authData.user.uid);
            let guestId = resData.val().guest_id;
            console.log("guest_id", guestId);
            this.apiService.getGuestUserIndexData(guestId).then((resData: any)=>{
              console.log("result_lease_data", resData);
              this.leaseData =  resData;
              localStorage.setItem('leaseData', JSON.stringify(resData));
            }).catch(err =>{
              console.log("Err", err.message);
            })
            this.navCtrl.setRoot(SidemenuPage);
          }
        })
        this.loading.dismiss();
      }, err => {
        this.alertCtrl.create({
          message: err.message,
          buttons: ["OK"]
        }).present();
        this.loading.dismiss();
      })
    }
  }
}
