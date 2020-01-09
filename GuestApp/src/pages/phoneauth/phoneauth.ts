import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SidemenuPage } from "../sidemenu/sidemenu";
import { SigninPage } from '../signin/signin';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';


@IonicPage()
@Component({
  selector: 'page-phoneauth',
  templateUrl: 'phoneauth.html',
})
export class PhoneauthPage {
  authCode: any;
  progress: number = 0;
  phoneNumber: any;
  verficationCode: any;
  verifyCode: boolean = true;
  verifyLoading: any;
  userInfo: any = { photoURL: "assets/imgs/empty_avatar.png" };
  possibel_share_data:any = "0123456789";
  guestData: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthserviceProvider,
    public apiService: ApiOperatorProvider,
    public loadingCtrl: LoadingController
  ) {
    this.verficationCode = navParams.get('verificationId');
    this.phoneNumber =  navParams.get('phoneCode');
    this.guestData = navParams.get('guestInfo');
    console.log("PhoneAuthData", this.verficationCode, this.phoneNumber, this.guestData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneauthPage');
    this.viewProgressValue();
  }
  viewProgressValue() {
    setTimeout(() => {
      this.showBar();
    }, 200)
  }
  showBar() {
    if (this.progress >= 100) {
      this.progress = 0;
      this.verifyCode = false;
    } else {
      this.progress += 2;
      this.viewProgressValue();
      this.verifyCode = true;
    }
  }
  onChangeTime() {
    if (this.authCode.length > 6) {
      console.log("Please check your code");
      let alert = this.alertCtrl.create({
        title: "Error!",
        subTitle: "I didn't get the Code...",
        buttons: [{
          text: "OK",
          handler: () => {
            this.authCode = "";
          }
        }]
      });
      alert.present();
    } else {
      if (this.authCode.length == 6) {
        console.log("inputed_value", this.authCode)
        let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verficationCode, this.authCode);
        firebase.auth().signInWithCredential(signInCredential).then((authData) => {
          localStorage.setItem('user_id', authData.uid);
          var self = this;
          this.apiService.getLeaseUserIndexData(this.guestData.lease_id).then(resData =>{
            console.log("res_guestIndex_data", resData);
            localStorage.setItem('guestData', JSON.stringify(resData));
            this.navCtrl.setRoot(SidemenuPage);
          }).catch(err =>{
            console.log("Error Guest Index", err.message);
          })
          localStorage.setItem('userType', "guest");
          self.authService.getcurrentUserData(authData.uid).subscribe(res => {
              self.saveUserData(authData.uid, authData.phoneNumber, authData.email, authData.displayName);
          });
        }).catch((error) => {
          this.alertCtrl.create({
            subTitle: "Error!",
            message: error.message,
            buttons: ["OK"]
          }).present();
          this.authCode = "";
        });
      }
    }
  }
  backPhonePage() {
    this.navCtrl.setRoot(SigninPage);
  }
  saveUserData(uid, phone, email, name) {
    this.userInfo.uid = uid;
    this.userInfo.phone = phone;
    this.userInfo.email = "";
    this.userInfo.role = 1;
    this.userInfo.create_at = new Date();
    this.authService.savePhoneUser(this.userInfo, this.guestData).then(() => {
      // this.navCtrl.setRoot(SidemenuPage);
    }, err => {
      alert("Save UserData failed due to " + err.message);
    })
  }
}
