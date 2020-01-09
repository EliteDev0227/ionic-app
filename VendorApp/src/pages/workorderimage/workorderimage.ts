import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-workorderimage',
  templateUrl: 'workorderimage.html',
})
export class WorkorderimagePage {

  photos: any;
  phototype: any;
  photoImage: any;
  images: any = [];
  workorderData: any = {};
  loading: any;
  // imagesData: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public camera: Camera,
    public socialSharing: SocialSharing,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController

  ) {
    this.workorderData = this.navParams.get('orderData');
    console.log("WorkOrderData", this.workorderData);

    if(this.workorderData.image == null){
      this.images = [];
    } else{
      this.images.push(this.workorderData.image);
    }



    // this.imagesData = ["assets/imgs/order/camera.svg", "assets/imgs/order/invoice.svg", "assets/imgs/order/call.svg", "assets/imgs/order/contact1.svg", "assets/imgs/order/map2.svg"];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkorderimagePage');
  }
  openImagePicker() {
    this.uploadData();
  }
  uploadData() {
    var self = this;
    let actionSheet = this.actionSheetCtrl.create({
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
      this.phototype = this.camera.PictureSourceType.PHOTOLIBRARY;
    } else if (id == 0) {
      this.phototype = this.camera.PictureSourceType.CAMERA;
    }
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.phototype,
      targetWidth: 350,
      targetHeight: 350,
      saveToPhotoAlbum: false,
      allowEdit: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.photoImage = 'data:image/jpeg;base64,' + imageData;
      this.images.push(this.photoImage);
      console.log("result_photoimages", this.images, this.images.length);
    }, (error) => {
      console.log(error);
    })
  }

  shareImage(img) {
    const actionSheet = this.actionSheetCtrl.create({
      title: "Share Option",
      buttons: [
        {
          text: "Share with Instagram",
          handler: () => {
            this.shareContent(0, img);
          }
        },
        {
          text: "Share with Facebook",
          handler: () => {
            this.shareContent(1, img);
          }
        },
        {
          text: "Share with Twitter",
          handler: () => {
            this.shareContent(2, img);
          }
        },
        {
          text: "Share with SMS",
          handler: () => {
            this.shareContent(3, img);
          }
        },
        {
          text: "Cancel",
          role: 'cancel',
          handler: () => {
            console.log("cancel clicked");
          }
        }
      ]
    });
    actionSheet.present();
  }

  async shareContent(type, img) {
    console.log("share_type", type);
    let dateTime = new Date();
    let msg = "Share";
    try {
      if (type == 0) {
        await this.socialSharing.shareViaInstagram(msg, img);
        this.displayToastData("Shared via instagram");
      } else if (type == 1) {
        await this.socialSharing.shareViaFacebook(msg, img, null);
        this.displayToastData("Shared via facebook");
      } else if (type == 2) {
        await this.socialSharing.shareViaTwitter(msg, img, null);
        this.displayToastData("Shared via twitter");
      } else if (type == 3) {
        await this.socialSharing.shareViaSMS(msg, "");
        this.displayToastData("Shared via SMS");
      }
    } catch (err) {
      this.displayToastData(err.message);
    }
  }

  displayToastData(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    }).present();
  }
  remove(img) {
    console.log("Before Delete the Images", this.images, this.images.length);
    var index = this.images.indexOf(img);
    if (index > -1) {
      this.images.splice(index, 1);
    }
    console.log("After Delete the Images", this.images, this.images.length);
  }

  shareAll() {
    this.loading = this.loadingCtrl.create({
      content: "Uploading...",
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();

    this.authService.getSaveImagesData(this.workorderData.id, this.images).subscribe((res: any) => {
      console.log("Result Imaage upload Data", res);
      if (this.loading !== null) {
        this.loading.dismiss();
        this.navCtrl.pop();
      }
    }, err => {
      console.log("Error upload Imaage Data", err.message);
      if (this.loading !== null) {
        this.loading.dismiss();
        this.navCtrl.pop();
      }
      // this.alertCtrl.create({
      //   subTitle: "Error!",
      //   message: err.message,
      //   buttons: ["Ok"]
      // }).present();
    })

  }
}
