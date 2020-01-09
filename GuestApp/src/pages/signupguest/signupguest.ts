import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, ToastController, ViewController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-signupguest',
  templateUrl: 'signupguest.html',
})
export class SignupguestPage {
  userInfo: any = { photoURL: "assets/imgs/empty_avatar.png" };
  phototype: any;
  photoImage: any;
  verifyLoading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthserviceProvider,
    public toastCtrl: ToastController,
    public camera: Camera,
    public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupguestPage');
  }
  getAvatarOption(){
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
  closeSignupModal() {
    this.viewCtrl.dismiss();
  }
  displayToast(message) {
    this.toastCtrl.create({ message: message, duration: 3000, position: 'top' }).present();
  }
  registerGuest(){
    if (this.userInfo.email == undefined || this.userInfo.pwd == undefined) {
      this.alertCtrl.create({
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
      this.userInfo.role = 1;
      this.authService.registerUser(this.userInfo).subscribe((resData: any) => {
        console.log("user_info_result", resData);
        loading.dismiss();
        this.viewCtrl.dismiss();
      }, err => {
        loading.dismiss();
        console.log("error", err.message);
        this.displayToast(err.message);
      });
    }
  }
}
