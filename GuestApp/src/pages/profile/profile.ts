import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase  from 'firebase';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  phototype:any;
  photoImage: any;
  userInfo: any = {photoURL: "assets/imgs/empty_avatar.png"};
  user_id: any;
  leaseData: any ={};
  guestData: any ={};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public actionsheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alretCtrl: AlertController,
    public authService: AuthserviceProvider
    ) {
      if (localStorage.getItem('user_id') !== null) {
        this.user_id = localStorage.getItem("user_id")
      };
      this.authService.getcurrentUserData(this.user_id).subscribe((res: any)=>{
        // this.userInfo = res.val();
        this.userInfo.photoURL = res.val().photo;
        this.userInfo.pwd = "*******";
        this.userInfo.email = res.val().email;
      })

      if(localStorage.getItem('userType') == 'lease'){
        if(localStorage.getItem('leaseData') !== null){
          this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
          // this.current_user = this.leaseData.profile;
          this.userInfo.firstname = this.leaseData.profile.first_name;
          this.userInfo.lastname = this.leaseData.profile.last_name;
          this.userInfo.phone = this.leaseData.profile.phone_1;
        }
      } else if(localStorage.getItem('userType') == 'guest'){
        if(localStorage.getItem('guestData') !== null){
          this.guestData = JSON.parse(localStorage.getItem('guestData'));
          console.log("home_guest_data", this.guestData);
          this.userInfo.firstname = this.guestData.GuestInfo.firstName;
          this.userInfo.lastname =  this.guestData.GuestInfo.lastName;
          this.userInfo.phone = this.guestData.GuestInfo.phoneOne;
        }
      }

      console.log("user_data_1", this.guestData);
      console.log("user_data_2", this.leaseData);



  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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

  selectPhoto(id){
    if(id ==1) {
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

  uploadImage(){
    var self  = this;
    if(self.photoImage) {
      let loadingView = self.loadingCtrl.create({
        content: 'Uploading image...',
        spinner: 'bubbles',
      });
      loadingView.present();
        let storageRef = firebase.storage().ref();
        var d = new Date();
        const filename =  d.getTime();
        const imageRef = storageRef.child('users/' + filename + '.png');
        imageRef.putString(self.photoImage, firebase.storage.StringFormat.DATA_URL).then((snapshot) =>{
          console.log("OK");
          loadingView.dismiss();
          snapshot.ref.getDownloadURL().then(function(downloadURL){
            console.log("downloadURL", downloadURL);
            self.userInfo.photoURL = downloadURL;
            self.displayToast("Updated successfully")

          })
        }).catch(error =>{
          console.log("Error_iamge", error.message);
        })
    }
  }
  displayToast(message){
    this.toastCtrl.create({message: message, duration: 3000,  position: 'top'}).present();
  }
  Update(){
    if(this.userInfo.firstname == undefined || this.userInfo.lastname == undefined || this.userInfo.email == undefined || this.userInfo.pwd == undefined ||this.userInfo.phone == undefined ){
      this.alretCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential",
        cssClass: 'alertDanger',
        buttons: ["OK"]
      }).present();
    }else {
      let loading =  this.loadingCtrl.create({
        content: "Updating Information...",
        spinner: "bubbles"
      });
      loading.present();
      this.userInfo.uid = this.user_id;
      this.userInfo.created_at = new Date();
      console.log("userData", this.userInfo.name);
      this.authService.updateuserInfo(this.userInfo).then(() =>{
        loading.dismiss();
        this.navCtrl.pop();
      }, err =>{
        loading.dismiss();
        console.log("error", err.message);
        this.displayToast(err.message);
      });
    }
  }
  closeSignupModal() {
    this.navCtrl.pop();
  }
}
