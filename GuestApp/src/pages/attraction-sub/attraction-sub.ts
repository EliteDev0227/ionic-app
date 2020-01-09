import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform, ToastController, ActionSheetController } from 'ionic-angular';
import { SubmapPage } from "../submap/submap"
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Base64 } from '@ionic-native/base64';

@IonicPage()
@Component({
  selector: 'page-attraction-sub',
  templateUrl: 'attraction-sub.html',
})
export class AttractionSubPage {
  loading: any;
  currentData: any = {};
  browser: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public iab: InAppBrowser,
    public platform: Platform,
    public callNumber: CallNumber,
    public socialSharing: SocialSharing,
    public toastCtrl: ToastController,
    public actionSheetController: ActionSheetController,
    public file: File,
    public transfer: FileTransfer,
    public base64: Base64
  ) {
    this.currentData = navParams.get('subModalData');
    console.log("current_user_data", this.currentData);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AttractionSubPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
    });
    this.loading.present();
    this.showData();
  }
  showData() {
    this.loading.dismiss();
  }

  close() {
    this.navCtrl.pop();
  }
  showMap() {
    this.navCtrl.push(SubmapPage, { mapviewData: this.currentData.address });
  }

  viewSite() {
    let url = this.currentData.link;
    console.log("MenuId", url);
    if (this.platform.is('android')) {
      let options = "hardwareback=no";
      this.browser = this.iab.create(url, "_blank", options);
    } else {
      this.browser = this.iab.create(url, "_blank");
    }
    this.browser.on('exit').subscribe(event => {
      console.log("event", event);
      this.browser.close();
      console.log("Appbrowser closed");
    }, error => {
      console.log("error", error);
      this.browser.close();
    });
  }
  getPhoneCall() {
    let str = this.currentData.phone;
    let pstr = str.replace("-", "");
    let phstr = pstr.replace("(", "");
    let phoneNumber = phstr.replace(")", "");
    phoneNumber = phoneNumber.replace(" ", "");
    console.log("phoneNumber", phoneNumber);
    this.callNumber.callNumber(phoneNumber, true).then(res => {
      console.log("Launched Dialer!", res);
    }).catch(err => {
      console.log("Error Launching Dialer", err);
    })
  }
  getShareContent() {
    const actionSheet = this.actionSheetController.create({
      title: "Share Option",
      buttons: [
        {
          text: "Share with Instagram",
          handler: () => {
            this.shareContent(0);
          }
        },
        {
          text: "Share with Facebook",
          handler: () => {
            this.shareContent(1);
          }
        },
        {
          text: "Share with Twitter",
          handler: () => {
            this.shareContent(2);
          }
        },
        {
          text: "Share with SMS",
          handler: () => {
            this.shareContent(3);
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

  async shareContent(type) {
    console.log("share_id", type);
    let msg = this.currentData.title;
    let img = this.currentData.image != '' ? this.currentData.image : "";
    let url = this.currentData.link;
    let dateTime = new Date();
    try {
      let convertedimg = await this.downloadImageAndEncode(img, dateTime);
      if (type == 0) {
        await this.socialSharing.shareViaInstagram(msg, convertedimg);
        this.displayToastData("Shared via instagram");
      } else if (type == 1) {
        await this.socialSharing.shareViaFacebook(msg, convertedimg, url);
        this.displayToastData("Shared via facebook");
      } else if (type == 2) {
        await this.socialSharing.shareViaTwitter(msg, convertedimg, null);
        this.displayToastData("Shared via twitter");
      } else if (type == 3) {
        await this.socialSharing.shareViaSMS(msg, "");
        this.displayToastData("Shared via SMS");
      }
    } catch (err) {
      this.displayToastData(err.message);
    }
  }

  async downloadImageAndEncode(url, fileid) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    try {
      const localurl = await fileTransfer.download(url, this.file.dataDirectory + fileid + '.jpg');
      const base64string = await this.base64.encodeFile(localurl.toURL());
      return base64string;
    } catch (err) {
    }
  }

  displayToastData(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    }).present();
  }
}
