import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, ViewController, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SidemenuPage } from "../sidemenu/sidemenu";
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  userInfo: any = { photoURL: "assets/imgs/empty_avatar.png" };
  phototype: any;
  photoImage: any;
  verifyLoading: any;
  // leaseId: any = "1161081";
  // unitId: any = "12760";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    public alretCtrl: AlertController,
    public authService: AuthserviceProvider,
    public toastCtrl: ToastController,
    public camera: Camera,
    public apiService: ApiOperatorProvider
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  getAvatarOption() {
    var self = this;
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select Image',
      buttons: [
        {
          text: 'Take Photo',
          handler: () => {
            self.selectPhoto(0);
          }
        },
        {
          text: 'Select from Library',
          handler: () => {
            self.selectPhoto(1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }


  selectPhoto(id) {
    if (id == 1) {
      this.phototype = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
    }
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.phototype,
      correctOrientation: true,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.photoImage = 'data:image/jpeg;base64,' + imageData;
      console.log(this.photoImage);
      this.uploadImage();
    }, (error) => {
      console.log(error);
    })
  }

  uploadImage() {
    var self = this;
    if (self.photoImage) {
      let loadingView = self.loadingCtrl.create({
        content: 'Uploading image...',
        spinner: 'bubbles',
      });
      loadingView.present();
      let storageRef = firebase.storage().ref();
      var d = new Date();
      const filename = d.getTime();
      const imageRef = storageRef.child('users/' + filename + '.png');
      imageRef.putString(self.photoImage, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
        console.log("OK");
        loadingView.dismiss();
        snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log("downloadURL", downloadURL);
          self.userInfo.photoURL = downloadURL;
          self.displayToast("Updated successfully")

        })
      }).catch(error => {
        console.log("Error_iamge", error.message);
      })
    }
  }
  displayToast(message) {
    this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
  }
  registerUser() {
    if (this.userInfo.lease == undefined || this.userInfo.unit == undefined || this.userInfo.email == undefined || this.userInfo.pwd == undefined) {
      this.alretCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();
    } else {
      let loading = this.loadingCtrl.create({
        content: "Creating Account",
        spinner: "bubbles"
      });
      loading.present();
      this.userInfo.role = 0;
      this.authService.registerUser(this.userInfo).subscribe((resData: any) => {
        console.log("user_info_result", resData);
        loading.dismiss();
        this.verifyUserInfo(resData.user.uid);
      }, err => {
        loading.dismiss();
        console.log("error", err.message);
        this.displayToast(err.message);
      });
    }
  }
  closeSignupModal() {
    this.viewCtrl.dismiss();
  }
  verifyUserInfo(uid) {
    this.verifyLoading = this.loadingCtrl.create({
      content: 'Verifing now...',
      spinner: 'bubbles'
    });
    this.verifyLoading.present();
    this.apiService.getLeaseUserVerify(this.userInfo.lease, this.userInfo.unit, "lease").subscribe((result: any) => {
      console.log("result_verify_data", result);
      if (result.status !== "success") {
        alert(result.status);
        this.verifyLoading.dismiss();
      } else {
        localStorage.setItem('current_lease', JSON.stringify(result));
        var self = this;
        this.authService.saveLeaseData(uid, result, self.userInfo.unit).then(verifyResultData => {
          self.displayToast(result.message + result.lease_id + result.guest_id);
          self.viewCtrl.dismiss();
        }).catch(err => {
          alert("Error " + err.message);
        })
        self.verifyLoading.dismiss();
      }
    }, error => {
      console.log(error);
      this.verifyLoading.dismiss();
    })
  }
}
