import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, ActionSheetController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  @ViewChild('myInput') myInput: ElementRef;
  floor: any = "Level 1";
  location: any = "Bathroom";
  issue_content: any = "";
  photos: any;
  phototype: any;
  photoImage: any;
  ishidden: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public emailComposer: EmailComposer,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public actionsheetCtrl: ActionSheetController,
    public camera: Camera,
    public socialSharing: SocialSharing
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

  close() {
    this.viewCtrl.dismiss();
  }
  upload() {
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
        content: 'Waiting...',
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
          self.ishidden = true;
          self.photos = downloadURL;
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
  confirm() {

    let body = 'Select Floor:' + this.floor + "\n" + "Issue Location:" + this.location + "\n" + "details_issue:" + this.issue_content;
    let subject = "Siebert App Report...";
    let toRecp = "mail@siebert-realty.com";
    let attach_file = this.photos;
    this.socialSharing.shareViaEmail(body, subject, [toRecp],  [], [], attach_file).then(sucess =>{
      this.displayToast("Sent the Message scuuceslly..");
      setTimeout(() =>{
        this.viewCtrl.dismiss();
      }, 2500);
    }).catch(err => {
      alert("Faild send the email due to" + err.message);
    })
  }
}
